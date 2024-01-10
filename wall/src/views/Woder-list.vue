<template>
  <div class="about">
    <div class="boxer">
      <!-- 用户 -->
      <div class="sculpture" v-for="(item, index) in userLists" :key="index">
        <div class="head-sculpture">
          <img :src=item.img class="touxiang" @click="showPopup = true">
        </div><span>
          <h4>{{ item.name }}</h4>
        </span>
      </div>
      <!-- 相关 -->
      <div class="my">
        <ul>
          <li>
            <svg t="1704444640034" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
              p-id="5173" width="20" height="20">
              <path
                d="M908.8 214.4c-9.6-12.8-19.2-22.4-28.8-32-112-115.2-230.4-105.6-342.4-16-9.6 6.4-19.2 16-28.8 25.6-9.6-9.6-19.2-16-28.8-25.6-112-86.4-230.4-99.2-342.4 16-9.6 9.6-19.2 19.2-25.6 32-134.4 195.2-60.8 387.2 137.6 560 44.8 38.4 89.6 73.6 137.6 102.4 16 9.6 32 19.2 44.8 28.8 9.6 6.4 12.8 9.6 19.2 9.6 3.2 3.2 6.4 3.2 12.8 6.4 3.2 3.2 9.6 3.2 16 6.4 25.6 6.4 64 3.2 89.6-12.8 3.2 0 9.6-3.2 16-9.6 12.8-6.4 28.8-16 44.8-28.8 48-28.8 92.8-64 137.6-102.4C969.6 598.4 1043.2 406.4 908.8 214.4zM736 732.8c-41.6 35.2-86.4 70.4-131.2 99.2-16 9.6-28.8 19.2-44.8 25.6-6.4 3.2-12.8 6.4-16 9.6-6.4 3.2-16 6.4-25.6 9.6-3.2 0-6.4 0-9.6 0-6.4 0-12.8 0-16 0-3.2 0-3.2 0-3.2 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0-3.2 0-3.2-3.2-3.2 0-6.4-3.2-9.6-3.2-3.2-3.2-9.6-6.4-16-9.6-12.8-6.4-28.8-16-44.8-25.6-44.8-28.8-89.6-60.8-131.2-99.2-179.2-160-243.2-323.2-131.2-489.6 6.4-9.6 16-16 22.4-25.6 89.6-96 182.4-86.4 275.2-12.8 9.6 6.4 16 12.8 22.4 19.2 0 0 0 0 0 0l28.8 32c3.2 3.2 3.2 3.2 6.4 6.4 0 0 0 0 0 0l0 0c3.2-3.2 9.6-9.6 16-16 12.8-12.8 25.6-25.6 41.6-38.4 92.8-73.6 185.6-83.2 275.2 12.8 6.4 9.6 16 16 22.4 25.6C982.4 406.4 918.4 572.8 736 732.8z"
                p-id="5174" fill="#2c2c2c"></path>
            </svg>
            <span>我的收藏</span>
            <p>›</p>
          </li>
          <li>
            <svg t="1704444976398" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
              p-id="6375" width="20" height="20">
              <path
                d="M511.5 792.2c-20.8 0-37.7-16.9-37.7-37.7V422c0-20.8 16.9-37.7 37.7-37.7s37.7 16.9 37.7 37.7v332.5c0 20.8-16.9 37.7-37.7 37.7z"
                fill="#2c2c2c" p-id="6376"></path>
              <path d="M511.5 298.8m-46.8 0a46.8 46.8 0 1 0 93.6 0 46.8 46.8 0 1 0-93.6 0Z" fill="#2c2c2c" p-id="6377">
              </path>
              <path
                d="M511.5 962C264.7 962 64 761.3 64 514.5S264.7 67 511.5 67 959 267.7 959 514.5 758.3 962 511.5 962z m0-841.1c-217 0-393.6 176.6-393.6 393.6s176.6 393.6 393.6 393.6 393.6-176.6 393.6-393.6-176.6-393.6-393.6-393.6z"
                fill="#2c2c2c" p-id="6378"></path>
            </svg>
            <span>关于我们</span>
            <p>›</p>
          </li>
          <li>
            <svg t="1704445057013" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
              p-id="7521" width="20" height="20">
              <path
                d="M120.470588 286.117647v451.764706L512 963.764706l391.529412-225.882353v-451.764706L512 60.235294 120.470588 286.117647z m813.176471-52.163765A60.235294 60.235294 0 0 1 963.764706 286.117647v451.764706a60.235294 60.235294 0 0 1-30.117647 52.163765l-391.529412 225.882353a60.235294 60.235294 0 0 1-60.235294 0l-391.529412-225.882353A60.235294 60.235294 0 0 1 60.235294 737.882353v-451.764706a60.235294 60.235294 0 0 1 30.117647-52.163765l391.529412-225.882353a60.235294 60.235294 0 0 1 60.235294 0l391.529412 225.882353zM512 722.823529a210.823529 210.823529 0 1 1 0-421.647058 210.823529 210.823529 0 0 1 0 421.647058z m0-60.235294a150.588235 150.588235 0 1 0 0-301.17647 150.588235 150.588235 0 0 0 0 301.17647z"
                fill="#2c2c2c" p-id="7522"></path>
            </svg>
            <span>设置</span>
            <p>›</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 弹窗 -->
    <div class="popup" v-if="showPopup">
      <div class="popup-content">
        <div class="mask">
          <div class="biu">
            <h3>登录</h3>
            <p><span>账号：</span><input type="text" v-model="username"></p>
            <p><span>密码：</span><input type="text" v-model="password"></p>
            <button @click="login">确认登录</button>
            <button @click="closePopup" style="float: right;">取消</button>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="footer">
      <div>
        <router-link to="/">
          <svg t="1704351596948" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="5790" width="32" height="32">
            <path
              d="M155.584 342.56l312.874667-224.565333a74.666667 74.666667 0 0 1 87.082666 0l312.874667 224.565333A117.333333 117.333333 0 0 1 917.333333 437.866667V800c0 64.8-52.533333 117.333333-117.333333 117.333333H224c-64.8 0-117.333333-52.533333-117.333333-117.333333V437.877333a117.333333 117.333333 0 0 1 48.917333-95.317333z m37.322667 51.989333A53.333333 53.333333 0 0 0 170.666667 437.877333V800a53.333333 53.333333 0 0 0 53.333333 53.333333h576a53.333333 53.333333 0 0 0 53.333333-53.333333V437.877333a53.333333 53.333333 0 0 0-22.24-43.328L518.218667 169.984a10.666667 10.666667 0 0 0-12.437334 0L192.906667 394.56z"
              fill="#2c2c2c" p-id="5791"></path>
          </svg>
          <span>精选</span>
        </router-link>

      </div>
      <div>
        <router-link to="/about">
          <svg t="1704351968437" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="16998" width="32" height="32">
            <path
              d="M471.686852 101.799524c204.344015 0.792039 367.17966 165.864632 365.341802 370.361119-1.805112 200.791096-167.922501 364.102578-368.817973 362.586039-204.01758-1.540076-367.660614-167.740352-365.522927-371.229906C104.803951 262.195607 269.228791 101.015671 471.686852 101.799524zM468.74894 747.379868c154.815995 0.411369 279.958156-122.55422 281.982256-277.076526 2.02717-154.871253-126.195144-283.401582-282.128589-282.802948-153.907299 0.590448-279.005458 126.299521-279.005458 280.371572C189.597149 622.259196 314.14784 746.968499 468.74894 747.379868z"
              p-id="16999" fill="#2c2c2c"></path>
            <path
              d="M853.313549 911.047462l-63.485917-63.485917c-14.874779-14.874779-14.874779-39.214117 0-54.088896l2.774183-2.774183c14.874779-14.874779 39.214117-14.874779 54.088896 0l63.485917 63.485917c14.874779 14.874779 14.874779 39.214117 0 54.088896l-2.774183 2.774183C892.527666 925.921217 868.188328 925.921217 853.313549 911.047462z"
              p-id="17000" fill="#2c2c2c"></path>
          </svg>
          <span>搜索</span>
        </router-link>
      </div>
      <div>
        <router-link to="/show">
          <svg t="1704351911532" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="15752" width="32" height="32">
            <path
              d="M512.5 542.5c59.36 0 115.17-23.12 157.14-65.09 41.97-41.97 65.09-97.78 65.09-157.14s-23.12-115.17-65.09-157.14c-41.97-41.97-97.78-65.09-157.14-65.09-59.36 0-115.17 23.12-157.14 65.09s-65.09 97.78-65.09 157.14 23.12 115.17 65.09 157.14 97.78 65.09 157.14 65.09z m0-384.46c89.45 0 162.23 72.78 162.23 162.23S601.95 482.5 512.5 482.5s-162.23-72.78-162.23-162.23 72.78-162.23 162.23-162.23zM715.57 669.86C661.19 615.49 588.9 585.54 512 585.54s-149.19 29.95-203.57 84.32c-54.38 54.38-84.32 126.67-84.32 203.57v19.96c0 16.57 13.43 30 30 30h515.78c16.57 0 30-13.43 30-30v-19.96c0-76.9-29.95-149.19-84.32-203.57zM284.33 863.39c2.46-57.1 25.86-110.43 66.53-151.1 43.04-43.04 100.27-66.75 161.14-66.75s118.1 23.71 161.14 66.75c40.67 40.67 64.07 94 66.53 151.1H284.33z"
              p-id="15753" fill="#2c2c2c"></path>
          </svg>
          <span>我的</span>
        </router-link>
      </div>
    </div>

  </div>
</template>
<script>
import axios from "axios"
export default {
  data() {
    return {
      showPopup: false,
      username: '',
      password: '',
      userLists: [
        {
          name: "请登录",
          img: ""
        }
      ]
    };
  },
  methods: {
    closePopup() {
      this.showPopup = false;
    },
    login() {
      if (!this.username || !this.password) {
        alert("请输入账号密码")
        return
      }
      axios.post('http://127.0.0.1:3000/wall/user', {
        params: {
          account: this.username,
          password: this.password
        }
      })
        .then((response) => {
          console.log(response.data.data[0].account);
          this.userLists = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
      this.showPopup = false;
    }
  }
}
</script>
<style>
h3 {
  text-align: center;
}

.biu input {
  float: right;
}

.biu button {
  margin: 10px;
}

.biu p {
  margin: 10px;
}

.biu {
  width: 235px;
  margin: auto;
  margin-top: 200px;
  font-size: 15px;
  padding: 10px;
  border-radius: 5px;
  background-color: antiquewhite;
}

.popup {
  display: flex;
  align-items: center;
  justify-content: center;
}

.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.popup-content {
  position: relative;
  z-index: 999;
}

.touxiang {
  width: 100%;
  height: 100%;
  border-radius: 100px;
}

.my p {
  margin: 5px 15px 0 0;
  float: right;
  font-size: 25px;
}

.my span {
  float: left;
  margin: 9px 0 0 5px;
}

.my svg {
  margin: 10px;
  float: left;
}

.my li {
  width: 100%;
  height: 40px;
  margin-top: 5px;
}

.my {
  width: 100%;
  float: left;
}

.head-sculpture {
  width: 70px;
  height: 70px;
  float: left;
  border-radius: 100px;
  margin: 15px;
}

.sculpture span {
  float: left;
  margin: 35px 0 0 5px;
}

.sculpture {
  width: 100%;
  height: 100px;
  margin-top: 50px;
  float: left;
}

span {
  color: black;
  text-decoration: none;
}

.footer {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  text-align: center;
  font-size: 12px;
  background-color: rgb(240, 240, 240);
}

.footer div {
  width: 30px;
  height: 38px;
  margin-left: 45px;
  margin-right: 50px;
  float: left;
}

.boxer {
  width: 100%;
  height: 600px;
  float: left;
}
</style>
  