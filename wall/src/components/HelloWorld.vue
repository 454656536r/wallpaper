<template>
  <div class="hello">
    <!-- 头部 -->
    <div class="head">
      <div class="share">
        <svg @click="share" t="1704349617698" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="2535" width="20" height="20">
          <path
            d="M874.9 459.4c-18.8 0-34 15.2-34 34v355.7c0 18.6-15.5 33.7-34.5 33.7H181.5c-19 0-34.5-15.1-34.5-33.7V232.3c0-18.6 15.5-33.7 34.5-33.7H541c18.8 0 34-15.2 34-34s-15.2-34-34-34H181.5C125 130.6 79 176.2 79 232.3v616.8c0 56 46 101.7 102.5 101.7h624.9c56.5 0 102.5-45.6 102.5-101.7V493.4c0-18.8-15.2-34-34-34z"
            fill="#2c2c2c" p-id="2536"></path>
          <path
            d="M885.5 82.7H657.1c-18.8 0-34 15.2-34 34s15.2 34 34 34h169.7L358.5 619.1c-13.3 13.3-13.3 34.8 0 48.1 6.6 6.6 15.3 10 24 10s17.4-3.3 24-10l470-470v169.7c0 18.8 15.2 34 34 34s34-15.2 34-34V141.5c0.1-32.4-26.4-58.8-59-58.8z"
            fill="#2c2c2c" p-id="2537"></path>
        </svg>
        <p>分享</p>
        <input type="text" class="input" placeholder="搜索壁纸">
      </div>
    </div>
    <!-- 身体 -->
    <div class="body">
      <div class="Carousel">
        <div class="block">
          <el-carousel height="200px">
            <el-carousel-item v-for="(item, index) in userList" :key="index">
              <img :src= item.img class="boximg">
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="classification">
        <div class="selected">
          <div>
              <router-link to="/tou">
                <img src="../assets/1.png" class="image">
                <a>聊天背景</a>
              </router-link>
          </div>
          <div>
            <router-link to="/head">
              <img src="../assets/2.png" class="image">
              <a>头像</a>
            </router-link>
          </div>
          <div>
            <router-link to="/expr">
              <img src="../assets/3.png" class="image">
              <a>表情</a>
            </router-link>
          </div>
          <div>
            <img src="../assets/1.png" class="image">
            <a>壁纸精选</a>
          </div>
          <router-view />
        </div>
        <div class="Headlines">
          <div class="first"> <img src="../assets/头条.png" class="firstr"></div>
          <el-carousel height="38px" direction="vertical" indicator-position="none">
            <el-carousel-item v-for="(item, index) in roll" :key="index">
              <button class="Introduction">{{ item.uptodate }}</button>
              <span class="recommend">{{ item.introduce }}</span>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="Popular">
        <div class="album">
          <h4>热门专辑<p>更多 ></p>
          </h4>
        </div>
        <div class="classificationimage">
          <img src="../assets/卡通.png" class="draw">
        </div>
        <div class="classificationimage">
          <img src="../assets/龙年.png" class="draw">
        </div>
      </div>
      <div class="trends">
        <div class="circle">
          <h4>动态圈子 <button>
              <h3>话题</h3>
            </button> </h4>
          <img src="../assets/圈子.png" class="assetsquan">
        </div>
        <div class="tab">
          <template>
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="精选" name="first1">
                <div class="Picture-Wallpaper" v-for="(item, index) in moblie" :key="index">
                  <router-link to="/mob">
                    <img :src= item.image>
                  </router-link>
                </div>
              </el-tab-pane>
              <el-tab-pane label="最新" name="first2">
                <div class="Picture-Wallpaper" v-for="(item, index) in popular" :key="index">
                  <img :src= item.image>
                </div>
              </el-tab-pane>
              <el-tab-pane label="主题套图" name="first3">
                <div class="Picture-Wallpaper" v-for="(item, index) in moblie" :key="index">
                  <img :src= item.image>
                </div>
              </el-tab-pane>
              <el-tab-pane label="天生一对" name="first4">
                <div class="Picture-Wallpaper" v-for="(item, index) in popular" :key="index">
                  <img :src= item.image>
                </div>
              </el-tab-pane>
              <el-tab-pane label="最佳锁屏" name="first5">
                <div class="Picture-Wallpaper" v-for="(item, index) in moblie" :key="index">
                  <img :src= item.image>
                </div>
              </el-tab-pane>
              <el-tab-pane label="一天最热" name="first6">
                <div class="Picture-Wallpaper" v-for="(item, index) in popular" :key="index">
                  <img :src= item.image>
                </div>
              </el-tab-pane>
              <el-tab-pane label="一周排行" name="first7">
                <div class="Picture-Wallpaper" v-for="(item, index) in moblie" :key="index">
                  <img :src= item.image>
                </div>
              </el-tab-pane>
              <el-tab-pane label="人气热榜" name="first8">
                <div class="Picture-Wallpaper" v-for="(item, index) in popular" :key="index">
                  <img :src= item.image>
                </div>
              </el-tab-pane>
              <el-tab-pane label="上传精选" name="first9">
                <div class="Picture-Wallpaper" v-for="(item, index) in moblie" :key="index">
                    <img :src= item.image>
                </div>
              </el-tab-pane>
            </el-tabs>
          </template>
          
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="footer">
      <div class="footerbox">
        <svg t="1704351596948" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="5790" width="32" height="32">
          <path
            d="M155.584 342.56l312.874667-224.565333a74.666667 74.666667 0 0 1 87.082666 0l312.874667 224.565333A117.333333 117.333333 0 0 1 917.333333 437.866667V800c0 64.8-52.533333 117.333333-117.333333 117.333333H224c-64.8 0-117.333333-52.533333-117.333333-117.333333V437.877333a117.333333 117.333333 0 0 1 48.917333-95.317333z m37.322667 51.989333A53.333333 53.333333 0 0 0 170.666667 437.877333V800a53.333333 53.333333 0 0 0 53.333333 53.333333h576a53.333333 53.333333 0 0 0 53.333333-53.333333V437.877333a53.333333 53.333333 0 0 0-22.24-43.328L518.218667 169.984a10.666667 10.666667 0 0 0-12.437334 0L192.906667 394.56z"
            fill="#2c2c2c" p-id="5791"></path>
        </svg>
        <span>精选</span>
      </div>
      <div class="footerbox">
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
      <div class="footerbox">
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
      activeName:'first1',
      imageArray: [
        {
          img: "https://img1.baidu.com/it/u=1461245034,737626739&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1704560400&t=e91440639611cdab9587c6dc65318350"
        },
        {
          img: "https://img1.baidu.com/it/u=805833920,1021605060&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1704560400&t=b5887a9112428a4c68c44f9ba8d11c67"
        },
        {
          img: "https://img1.baidu.com/it/u=2182643607,3196213600&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1704560400&t=04a0815feb05d7e430b61adf7a06ad3b"
        },
        {
          img: "https://img2.baidu.com/it/u=3442745478,1372239926&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1704560400&t=cf66b95c00262dde98c18312eeb20bc0"
        },
      ],
      roll: [
        {
          uptodate: "最新",
          introduce: "好看的美女头像~"
        },
        {
          uptodate: "最新",
          introduce: "绝美星辰头像~!"
        },
        {
          uptodate: "最新",
          introduce: "这组壁纸当锁屏，超好看!!"
        },
        {
          uptodate: "最新",
          introduce: "新年好运壁纸，2024接好运!"
        },
      ],
      userList:[],
      popular:[],
      moblie:[],
    }
  },
  methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      share(){
        alert("已分享")
      }
    },
  mounted() {
    axios.get('http://127.0.0.1:3000/wall/')
      .then((response) => {
        this.userList = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
      axios.get('http://127.0.0.1:3000/wall/moblie')
      .then((response) => {
        this.moblie = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
      axios.get('http://127.0.0.1:3000/wall/popular')
      .then((response) => {
        this.popular = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
}
</script>
<style scoped>
.Picture-Wallpaper img{
  width: 100%;
  height: 100%;
}
span{
  color: black;
  text-decoration: none;
}
.recommend {
  color: gray;
  font-size: 13px;
  margin-left: 10px;
}

.Introduction {
  width: 35px;
  border: none;
  font-size: 10px;
  color: rgb(255, 126, 126);
  margin-top: 14px;
  margin-left: 5px;
  background-color: rgb(255, 196, 196);
}

.boximg {
  width: 100%;
  height: 100%;
}

.assetsquan {
  width: 100%;
}

li {
  list-style: none;
}

.tab el-tab-pane {
  color: rgb(0, 179, 255);
  border-bottom: 3px solid rgb(0, 179, 255);
}

.tab el-tab-pane {
  margin: 10px;
  display: inline-block;
}

.tab {
  width: 100%;
  float: left;
  position: sticky;
  top: 0;
  overflow-x: auto;
  white-space: nowrap;
}

.Picture-Wallpaper {
  width: 110px;
  height: 200px;
  float: left;
  border-radius: 3px;
  background-color: #d3dce6;
  margin: 4.2px;
}

.circle button {
  width: 60px;
  padding: 3px;
  border: none;
  color: white;
  float: right;
  margin-top: -2px;
  margin-right: -10px;
  border-radius: 10px 0px 0px 10px;
  background-color: rgb(0, 179, 255);
}

.circle h4 {
  margin: 10px;
}

.circle {
  width: 100%;
  height: 230px;
  float: left;
  background-color: aliceblue;
}

.trends h4 {
  margin-top: 10px;
}

.trends {
  width: 95%;
  margin: auto;
  background-color: #475669;
}

.draw {
  width: 100%;
  height: 100%;
}

.classificationimage {
  width: 170px;
  height: 100px;
  margin: 4px;
  float: left;
}

.album p {
  color: rgb(183, 183, 183);
  float: right;
  margin: 4px;
  font-size: 10px;
}

.album h4 {
  margin: 10px;
}

.album {
  width: 100%;
  height: 40px;
  float: left;
  background-color: aliceblue;
}

.Popular {
  width: 95%;
  height: 150px;
  margin: auto;
}

.firstr {
  width: 80px;
  height: 38px;
  margin-left: 10px;
}

.first {
  width: 100px;
  height: 50px;
  float: left;
}

.selected a {
  font-size: 10px;
  color: black;
  text-decoration: none;
}

.image {
  width: 40px;
  height: 40px;
  margin: 5px 5px 0 5px;
  border-radius: 100%;
}

.selected div {
  width: 50px;
  height: 50px;
  margin-left: 19px;
  margin-right: 20px;
  margin-top: 10px;
  float: left;
  text-align: center;
}

.Headlines {
  width: 100%;
  height: 38px;
  margin-top: 10px;
  border-radius: 5px;
  background-color: rgb(246, 246, 246);
}

.selected {
  width: 100%;
  height: 70px;
}

.classification {
  width: 95%;
  height: 130px;
  margin: auto;
}

.head {
  width: 100%;
  position: fixed;
  top: 0;
  background-color: #fff;
  z-index: 100;
}

.share {
  width: 30px;
  height: 38px;
  margin: 11px;
  text-align: center;
  font-size: 10px;
}

.input {
  background-image: url('../assets/搜索.png');
  background-size: 16px 16px;
  /* 背景图片的大小 */
  background-position: 70px center;
  /* 背景图片的位置 */
  width: 200px;
  height: 30px;
  float: left;
  border: none;
  text-align: center;
  background-repeat: no-repeat;
  margin: -35px 10px 0px 37px;
  border-radius: 3px;
  background-color: rgb(242, 242, 242);
  line-height: 30px;
  /* 文字行高等于输入框高度 */
  padding-left: 30px;
  /* 左侧留出空间给背景图片 */
}

.body {
  width: 100%;
  height: 700px;
  float: left;
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

.footerbox {
  width: 30px;
  height: 38px;
  margin-left: 45px;
  margin-right: 50px;
  float: left;
}

.Carousel {
  width: 95%;
  height: 200px;
  border-radius: 5px;
  margin:60px 10px 10px 10px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}</style>
