function navigation(){

    return ` 
    <nav>
    <div class="stock_logo">
        <img src="./Img/logo.png" alt="">
    </div>
    <div class="ipt">
        <input type="text">
        <button>Search</button>
    </div>
    <div class="cart_div"></div>  
</nav>
<div class="bottom_nav">
    <a href="#"><h4>Furniture</h4></a>
    <a href="#"><h4>Furniture</h4></a>
    <a href="#"><h4>Furniture</h4></a>
    <a href="#"><h4>Furniture</h4></a>
    <a href="#"><h4>Furniture</h4></a>
    <a href="#"><h4>Furniture</h4></a>
    <a href="#"><h4>Furniture</h4></a>
    <a href="#"><h4>Furniture</h4></a>
</div> `    
}

function Footer(){

    return `
    <div id="Foot-Menu">
                
                <div id="Foot-Menu-1">
                    <p style="font-size: 14px">MY ACCOUNT</p>
                    <p>Orders & Returns</p>
                    <p>Email Preferences</p>
                    <p>Account Settings</p>
                </div>
                <div id="Foot-Menu-2">
                    <p style="font-size: 14px">LET US HELP</p>
                    <p>Contact Customer Care</p>
                    <p>Shipping Information</p>
                    <p>Return Policy</p>
                    <p>International Help</p>
                    <p>Accessibility</p>
                </div>
                <div id="Foot-Menu-3">
                    <p style="font-size: 14px">COMPANY INFORMATION</p>
                    <p>About Overstock™</p>
                    <p>Careers
                    </p>
                    <p>Sell Your Products
                    </p>
                    <p>Overstock™ Investor Relations</p>
                    <p>Overstock Dividend FAQs</p>
                    <p> Overstock™ Supply Chain Transparency</p>
                </div>
                <div id="Foot-Menu-4">
                    <p style="font-size: 14px">MORE WAYS TO SHOP</p>
                    <p>Tips & Ideas</p>
                    <p>Deals</p>
                    <p>Clearance</p>
                    <p>New Arrivals</p>
                </div>
             </div>

             <div id="Foot-last"> 
                 <div id="Foot-last-1">
                    <p> © Copyright 2021, Overstock.com®, Inc. <br>

                        799 Coliseum Way Midvale, UT 84047 | 1-800-843-2446</p>
                 </div>
                 <div id="Foot-last-2">
                     <p>Privacy Policy</p>
                     <p>Terms & Conditions</p>
                     <p>Promotion Terms</p>
                     <p>Ship to: <span id="F-l-Ind"><img src="https://ak1.ostkcdn.com/img/mxc/intFlag_IN.gif" alt="" width="30px" height=20px"> </p></span> 
                 </div>
                 
             </div>`
}
export{ navigation, Footer }