function Promo(props) {
    return (
        <div className="promo-section">
            <div>
                <div>
                  <h1>{props.heading}</h1>
                </div>
                <div>
                   <h2>{props.promoSubHeading}</h2>
                </div>
            </div>
        </div>
    );
};

export default Promo;