import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../redux/slices/productSlice";
import DetailComp from "../components/detail/DetailComp";
import Loading from "../components/Loading";

const Detail = () => {
  const { id } = useParams();
  console.log("id",id)
  const dispatch = useDispatch();
  const { productDetailStatus, productDetails } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getDetailProduct(id));
  }, []);
 
  return (
    <div>
    {productDetailStatus == "LOADING" ? (
      <Loading />
    ) : (
      <DetailComp productDetail={productDetails} />
    )}
  </div>
  );
};

export default Detail;
