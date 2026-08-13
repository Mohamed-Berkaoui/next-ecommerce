"use client";

function Button() {
    function handleClick(e){
        alert('product added to cart')
    }
  return (
    <button type={"submit"} className="product-card__button" onClick={handleClick}>
      Add to cart
    </button>
  );
}

export default Button;
