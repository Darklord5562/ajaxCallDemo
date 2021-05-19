# snap tab is the direct child of app container `.app`

##  The html
    <snaptabs>
      <span class="tab-name active-tab">Home</span>
      <span class="tab-name">Lorem</span>
      <span class="tab-name">Ipsium</span>
      <span class="tab-name">Dolor</span>
      <span class="tab-name">Sit</span>
      <span class="tab-name">Amet</span>
      <span class="tab-name">Bill</span>
      <span class="tab-name">Gobinda is very popular</span>
      <span class="tab-name">Mark</span>
      <span class="tab-name">Maria</span>
    </snaptabs>
    
    
    
# The css # 


    snaptabs{
      display: flex;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      position: sticky;
      background: #fff;
      top: 50px;
      overflow-x: auto;
      overflow-y: hidden;
    }
    .tab-name{
      padding: 10px 15px;
      position: relative;
      width: 100%;
      white-space: nowrap;
    }
    .active-tab{
      color: #0072FF;
      font-weight: bold;
    }
    .active-tab:after{
      content: "";
      text-align: center;
      background: #0072FF;
      position: absolute;
      height: 3px;
      width: 80%;
      bottom: 0px;
      left: 10%;
      border-radius: 2px 2px 0px 0px;
    }