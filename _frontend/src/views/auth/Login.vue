<template>
  <div class="had-container">

 <h3>Drop Down Demo</h3>
      <ul id = "dropdown" class = "dropdown-content">
         <li><a href = "#">Inbox<span class = "badge">12</span></a></li>
         <li><a href = "#!">Unread<span class = "new badge">4</span></a></li>
         <li><a href = "#">Sent</a></li>
         <li class = "divider"></li>
         <li><a href = "#">Outbox<span class = "badge">14</span></a></li>
      </ul>
      
      <a class = "dropdown-button" href = "#" data-activates = "dropdown">Mail Box
         <i class = "mdi-navigation-arrow-drop-down right"></i></a>



    <div class="parallax-container logueo">
      <div class="parallax"><img src="https://alistapart.com/d/438/fig-6--background-blend-mode.jpg"></div>
      <div class="row"><br>
        <div class="col m8 s8 offset-m2 offset-s2 center">
          <h4 class="truncate bg-card-user">
            <!-- <img
              src="https://cdn3.iconfinder.com/data/icons/happily-colored-snlogo/128/medium.png"
              alt=""
              class="circle responsive-img"
            > -->
            <div class="row login">
              <h4>He Thong Dat Xe</h4>
              <form class="col s12">
                <div class='row'>
                  <div class='input-field col m12'>
                    <i class="material-icons iconis prefix">account_box</i>
                    <input
                      type='text'
                      name='username'
                      id='username'
                    />
                    <label for='username'>Username</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                    <i class="material-icons iconis prefix">enhanced_encryption</i>
                    <input
                      type="password"
                      name="password"
                      id="password"
                    >
                    <label for="password">Pasword</label>
                  </div>
                  <label style='float: right;'>
                    <a><b style="color: #F5F5F5;">Forgot Password?</b></a>
                  </label>
                </div>
                <div class="row">
                  <button
                    class="btn waves-effect waves-light"
                    type="button"
                    v-on:click="login()"
                  >Login</button>
                </div>
              </form>
            </div>
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>