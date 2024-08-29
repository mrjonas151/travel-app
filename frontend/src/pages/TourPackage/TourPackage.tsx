import { useEffect, useState } from "react";
import BackgroundComponent from "../../components/BackgroundComponent/BackgroundComponent";
import CategoriesComponent from "../../components/CategoriesComponent/CategoriesComponent";
import DestinationsFilterComponent from "../../components/DestinationsFilterComponent/DestinationsFilterComponent";
import FilterByComponent from "../../components/FilterByComponent/FilterByComponent";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import PopularToursComponent from "../../components/PopularToursComponent/PopularToursComponent";
import ReviewFilterComponent from "../../components/ReviewFilterComponent/ReviewFilterComponent";
import SearchFilterComponent from "../../components/SearchFilterComponent/SearchFilterComponent";
import SearchTravel from "../../components/SearchTravel/SearchTravel";
import styles from './TourPackage.module.css';
import api from "../../services/api";
import { TourDetailComponentProps } from "../../components/TourDetailComponent/TourDetailComponent";
import ReactPaginate from 'react-paginate';
import { useLocation } from "react-router-dom";

const TourPackage = () => {
  const [tours, setTours] = useState<TourDetailComponentProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const toursPerPage = 9;
  const [sortOption, setSortOption] = useState('popularity');
  const [priceFilter, setPriceFilter] = useState<number>(100000);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [reviewFilter, setReviewFilter] = useState<string[]>([]);
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([]);

  const location = useLocation();

  const applyFilterFromURL = () => {
    const params = new URLSearchParams(location.search);
    const filter = params.get('filter');
    const search = params.get('search');

    if (search) {
      setSearchTerm(search);
    }
    
    if (filter) {
      setSelectedCategories([filter]); 
    }
  };

  useEffect(() => {
    applyFilterFromURL();
  }, [location.search]);

  useEffect(() => {
    const params = new URLSearchParams(location.search); 
    const filter = params.get('filter');
    if (filter) {
      setSelectedCategories([filter]);
    }
  }, [location.search]);

  const getAllTours = async () => {
    setLoading(true);
    try {
      const response = await api.get('/tourDetails');
      setTours(response.data);
    } catch (err) {
      setError('Error searching for tours');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllTours();
  }, []);

  const sortedTours = () => {
    let sorted = [...tours];
    if (sortOption === 'price') {
      sorted.sort((a, b) => a.initial_price - b.initial_price);
    } else if (sortOption === 'rating') {
      sorted.sort((a, b) => b.averageRating - a.averageRating);
    }
    return sorted;
  };

  const filteredTours = sortedTours().filter((tour) => {
    const price = Number(tour.initial_price);
    const filterPrice = Number(priceFilter);

    const matchesSearch =
      tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tour.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tour.country.name.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDestination = selectedDestinations.length === 0 ||
      selectedDestinations.includes(tour.country.name);

      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(tour.category.title);
      
    const matchesReview = reviewFilter.length === 0 || reviewFilter.some((filter) => {
      const filterRating = parseInt(filter.split(' ')[0], 10);
      return tour.averageRating >= filterRating;
    });

    return price <= filterPrice && matchesSearch && matchesCategory && matchesReview && matchesDestination;
  });
  
  const offset = currentPage * toursPerPage;
  const currentTours = filteredTours.slice(offset, offset + toursPerPage);
  const pageCount = Math.ceil(filteredTours.length / toursPerPage);

  const handlePageClick = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  const handleReviewFilterChange = (selectedCategories: string[]) => {
    setReviewFilter(selectedCategories);
    setCurrentPage(0);
  };

  const handleDestinationChange = (destinations: string[]) => {
    setSelectedDestinations(destinations);
    setCurrentPage(0);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
    setCurrentPage(0);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(0); 
  };

  const handlePriceFilterChange = (price: number) => {
    setPriceFilter(price);
    setCurrentPage(0);
  };

  const handleCategoryChange = (categories: string[]) => {
    setSelectedCategories(categories);
    setCurrentPage(0);
  };

  if (loading) return <p>Waiting...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Header />
      <BackgroundComponent />
      <div className={styles.searchContainer}>
        <SearchTravel />
      </div>
      <div className={styles.mainPage}>
        <div className={styles.content}>
          <div className={styles.rowContent}>
            <SearchFilterComponent onSearchChange={handleSearchChange} />
            <div className={styles.rowFilters}>
              <p>{filteredTours.length} Tours</p>
              <div>
                <span>Sort by</span>
                <select value={sortOption} onChange={handleSortChange}>
                  <option value="popularity">Popularity</option>
                  <option value="price">Price</option>
                  <option value="rating">Rating</option>
                </select>
              </div>
            </div>
          </div>
          <FilterByComponent onPriceChange={handlePriceFilterChange} />
          <CategoriesComponent onCategoryChange={handleCategoryChange} selectedCategories={selectedCategories} />
          <DestinationsFilterComponent onDestinationChange={handleDestinationChange} />
          <ReviewFilterComponent onReviewFilterChange={handleReviewFilterChange} />
        </div>
        <div className={styles.allTours}>
          {currentTours.map((tour) => (
            <div key={tour.id} className={styles.popularTourItem}>
              <PopularToursComponent
                id={tour.id}
                url_image={tour.url_image}
                city={tour.city}
                country={tour.country}
                title={tour.title}
                averageRating={tour.averageRating}
                userRatings={tour.userRatings}
                initial_date={tour.initial_date}
                final_date={tour.final_date}
                initial_price={tour.initial_price}
                max_people={tour.max_people}
                min_age={tour.min_age}
                tour_type={tour.tour_type}
                overview_city={tour.overview_city}
                overview_curiosities={tour.overview_curiosities}
                latitude={tour.latitude}
                longitude={tour.longitude}
                category={{
                  id: tour.category.id,
                  title: tour.category.title,
                  tour_quantity: tour.category.tour_quantity,
                  price: tour.category.price
                }}
              />
            </div>
          ))}
        </div>
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={styles.pagination}
          activeClassName={styles.active}
        />
      </div>
      <Footer />
    </>
  );
};

export default TourPackage;