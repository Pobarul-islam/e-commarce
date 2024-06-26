const HomeSectionCard = () => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={
            'https://www.aarong.com/media/catalog/product/0/0/0060000148669.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=400&width=300&canvas=300:400'
          }
          alt=""
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">Nofilter</h3>
        <p className="mt-2 text-sm text-gray-500 ">
          Richman White Printed Half Sleeve Hawaiian Shirt
        </p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
