import React from "react";
import "./Subtotal_Style/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../APIs/StateProvider";
import { getBasketTotal } from "../../APIs/reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This Order Contains a Gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button onClick={(e) => history.push("/payment")}>
        Proceed To Checkout
      </button>
    </div>
  );
}

export default Subtotal;
