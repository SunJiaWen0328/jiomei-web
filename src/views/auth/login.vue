<template>
  <div class="login-view">
    <div class="contact-us section" id="contact">
      <div class="container">
        <div class="row">
          <div class="col-lg-6" id="register-form">
            <div class="contact-us-content">
              <form id="contact-form" action="" method="post">
                <div class="row">
                  <div class="col-lg-12">
                    <fieldset>
                      <input type="name" name="name" id="name" placeholder="账号..." autocomplete="on" required>
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <input type="text" name="password" id="password" pattern="[^ @]*@[^ @]*" placeholder="密码...">
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <input type="text" name="password" id="password" pattern="[^ @]*@[^ @]*" placeholder="确认密码...">
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <button type="submit" id="form-submit" class="orange-button">注册</button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-lg-6  align-self-center" id="intro">
            <div class="section-heading">
              <h6>Jio Mei</h6>
              <h2>{{ isLogin ? '登录' : '注册'}}</h2>
              <!-- <p>感谢您的支持</p> -->
              <div class="special-offer">
                <span class="offer">天气<br><em>28°C</em></span>
                <h6>日期: <em>{{ dateTime }}</em></h6>
                <h4>祝您今天快乐</h4>
                <a href="#" @click="surprise"><i class="fa fa-angle-right"></i></a>
              </div>
              <div class="form-change">
                <button type="submit" id="form-submit" class="btn btn-primary" @click="changeForm">
                  {{  isLogin ? '没有账号？注册' : '登录'  }}</button>
              </div>
            </div>
          </div>
          <div class="col-lg-6" id="login-form">
            <div class="contact-us-content">
              <form id="contact-form" action="" method="post">
                <div class="row">
                  <div class="col-lg-12">
                    <fieldset>
                      <input type="name" name="name" id="name" placeholder="账号..." autocomplete="on" required>
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <input type="text" name="password" id="password" pattern="[^ @]*@[^ @]*" placeholder="密码...">
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <button type="submit" id="form-submit" class="orange-button">登录</button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import moment from 'moment';

@Options({
  components: {},
})
export default class LoginView extends Vue {
  type = 'login'

  get isLogin() {
    return this.type == 'login'
  }

  get dateTime() {
    const currentDate = moment().format('YYYY-MM-DD HH:mm:ss')
    return currentDate
  }

  changeForm() {
    if (this.isLogin) {
      this.type = 'register'
    } else {
      this.type = 'login'
    }
    // 如何是大屏幕，需要移动， 小屏幕直接切换
    if (window.innerWidth > 992) {
      const contact = document.getElementById('contact') as HTMLElement
      contact.style.transform = 'translateX(' + (this.isLogin ? '0' : '700px)')
    } else {
      console.log('解决')
      // 登录隐藏，注册出现

    }
  }

  surprise() {
    console.log('惊喜')
  }
}
</script>

<style lang="scss">
.login-view {
  margin-top: 150px;
  
  #contact {
    transition: transform 0.5s ease;
  }
  #register-form {
    position: absolute;
    left: -700px;
    top: 10px;
    max-width: 700px;
  }
}

</style>