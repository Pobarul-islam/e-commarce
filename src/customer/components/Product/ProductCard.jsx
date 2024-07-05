

const ProductCard = () => {
    return (
      <div className="ProductCard w-[15rem] m-3 transition-all cursor-pointer">
        <div className="h-[12rem]">
          <img className="h-full w-full object-cover object-left-top"
            src="https://www.aarong.com/media/catalog/product/0/1/0120000035627.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=400&width=300&canvas=300:400"
            alt=""
          />
        </div>
      </div>
    );
};

export default ProductCard;