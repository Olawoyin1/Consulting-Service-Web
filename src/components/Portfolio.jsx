const Portfolio = () => {
  const portfolio = [
    { image: "../../Images/atds1.png" },
    { image: "../../Images/atds2.jpeg" },
    { image: "../../Images/atds3.jpeg" },
    // { image: "../../Images/atds4.png" },
    { image: "../../Images/port1.png" },
    { image: "../../Images/port2.png" },
    { image: "../../Images/port3.png" },
    { image: "../../Images/port4.png" },
  ];

  return (
    <div className="container mx-auto py-5">
      <h1 className="text-center mb-4 hero-title">Portfolio</h1>

      <div className="row ">
        {portfolio.map((item, index) => (
          <div key={index} className="col-12 col-lg-6">
            <div className="overflow-hidden p-2">
              <img
                src={item.image}
                alt={`Portfolio ${index + 1}`}
                className="img-fluid w-100"
                style={{ height: '350px', objectFit: 'contain' }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
