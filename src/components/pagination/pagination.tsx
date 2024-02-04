import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../button/button";
import "./pagination.css";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface PaginationProps {
  pageIndex: number;
  totalPages: number;
  setPageIndex: (index: number) => void;
}

const Pagination = ({
  pageIndex,
  totalPages,
  setPageIndex,
}: PaginationProps) => {
  const handlePreviousPage = () => {
    setPageIndex(-1);
  };

  const handleNextPage = () => {
    setPageIndex(1);
  };

  return (
    <div className="pagination-wrapper">
      <span>{`Page ${pageIndex} of ${totalPages}`}</span>
      <div className="pagination-buttons">
        <Button disabled={pageIndex === 1} onClick={handlePreviousPage}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </Button>
        <Button disabled={pageIndex === totalPages} onClick={handleNextPage}>
          <FontAwesomeIcon icon={faChevronRight} />
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
