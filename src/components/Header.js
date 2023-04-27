import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { productSearch } from "../redux/actions/productAction";

const Header = () => {
  const result = useSelector((state) => state.cartData);
  const dispatch = useDispatch();
  return (
    <>
      <div className="header">
        <div className="search-box">
          <input
            type="search"
            onChange={(event) => dispatch(productSearch(event.target.value))}
            placeholder="Search Product"
          />
        </div>
        <Link to={"/cart"}>
          <div className="cart">
            <span>{result.length}</span>
            <img
              src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png"
              alt="cart"
            />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Header;
