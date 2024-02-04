import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputGroup from "./components/input-group/input-group";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { SubscriberData } from "./models/subscriber";
import Pagination from "./components/pagination/pagination";
import SubscribersSection from "./layouts/subscribers-section/subscribers-section";
import queryString from "query-string";
import { updateBrowserURL } from "./utils/utils";
import "./App.css";
import useFetch from "./hooks/useFetch";
import { API_URL } from "./utils/constants";

function App() {
  const [showError, setShowError] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>();
  const [searchTerm, setSearchTerm] = useState<string>();

  const { data, setData, loading, fetchFn } = useFetch<SubscriberData>();

  const queryParams = queryString.parse(window.location.search);

  useEffect(() => {
    if (searchTerm === "" && currentPage !== undefined) {
      setCurrentPage(undefined);
      setSearchTerm(undefined);
      setData(undefined);
      return updateBrowserURL("");
    }

    const params = `?pageIndex=${currentPage}${
      searchTerm ? `&search=${searchTerm}` : ""
    }`;

    if (currentPage !== undefined) {
      fetchFn(API_URL + params);
      updateBrowserURL(params);
    }
  }, [currentPage, searchTerm]);

  // This useEffect is used to set query params at first load, only if they exist.
  useEffect(() => {
    queryParams.pageIndex && setCurrentPage(Number(queryParams.pageIndex));
    queryParams.search && setSearchTerm(String(queryParams.search));
  }, []);

  const handleSearch = (searchText: string) => {
    if (searchText.length > 0 && searchText.length < 3) {
      return setShowError(true);
    }
    showError && setShowError(false); // Hide the error message if it was displayed previously.
    if (searchText !== "" && searchText !== undefined) setCurrentPage(0); // resets the current page after doing a search
    setSearchTerm(searchText);
  };

  const handleChangePageIndex = (index: number) => {
    setCurrentPage((currentPage) => (currentPage ?? 0) + index);
  };

  return (
    <main>
      <h1 className="page-title">Search</h1>
      <h6 className="page-subtitle">
        Find subscribers by name, email address or Id.
      </h6>
      <InputGroup
        placeholder="Search"
        buttonContent={<FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />}
        error={{
          showError,
          errorMessage: "Enter at least 3 characters",
        }}
        onClick={handleSearch}
      />

      {data && <SubscribersSection data={data} loading={loading} />}

      {data && data?.totalResults > data?.pageSize && data.subscribers.length > 0 && !loading && (
        <Pagination
          setPageIndex={handleChangePageIndex}
          pageIndex={data.pageIndex + 1}
          totalPages={Math.ceil(data.totalResults / data.pageSize)}
        />
      )}
    </main>
  );
}

export default App;
