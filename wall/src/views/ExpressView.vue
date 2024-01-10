<template>
    <div class="about">
        <!-- 返回 -->
        <div class="haders">
            <router-link to="/">
                <a> ‹ </a>
            </router-link>
            <span> <input type="text" class="input" placeholder="搜索头像"></span>
            <div class="down">
                <div class="dropdown">
                    <button class="you">▾</button>
                    <div class="dropdown-content">
                        <h4 class="biaoqian">标签</h4>
                        <div v-for="(item, index) in avatard" :key="index">
                            <img :src=item.img>
                            <p>{{ item.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="drop-down">
            <template>
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="推荐" name="first1">
                        <div class="chat">
                            <div v-for="(item, index) in moblie" :key="index"><img :src=item.img></div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="熊本熊表情" name="first2">
                        <div class="chat">
                            <div v-for="(item, index) in popular" :key="index"><img :src=item.image></div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="GIF动图表情" name="first3">
                        <div class="chat">
                            <div v-for="(item, index) in moblie" :key="index"><img :src=item.img></div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="恶搞影视" name="first4">
                        <div class="chat">
                            <div v-for="(item, index) in popular" :key="index"><img :src=item.image></div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="魔性小人表情" name="first5">
                        <div class="chat">
                            <div v-for="(item, index) in moblie" :key="index"><img :src=item.img></div>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </template>

        </div>
        <div class="footert">
            <!-- 首页 -->
            <div>
                <router-link to="/">
                    <svg t="1704423636753" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="4046" width="25" height="25">
                        <path
                            d="M921.764 518.884L508.91 132.866 96.056 517.75c-8.077 7.53-8.527 20.193-0.979 28.261 7.54 8.063 20.218 8.518 28.289 0.971L508.88 187.603l385.531 360.473a19.967 19.967 0 0 0 13.678 5.401c5.335 0 10.673-2.119 14.61-6.336 7.555-8.063 7.139-20.714-0.935-28.256z m0 0z m-125.983 7.929c-11.05 0-20.015 8.959-20.015 19.995v306.597H615.643V640.121H402.148v213.284H242.03V546.808c0-11.036-8.955-19.995-20.014-19.995-11.065 0-20.018 8.959-20.018 19.995v346.586h240.183V680.111h133.434v213.283h240.177V546.808c0.001-11.036-8.965-19.995-20.011-19.995z m0 0zM655.677 240.214h120.089v106.64c0 11.053 8.965 20 20.015 20 11.047 0 20.012-8.947 20.012-20V200.225H655.676c-11.053 0-20.018 8.942-20.018 19.995-0.001 11.049 8.965 19.995 20.018 19.995z m0 0z"
                            p-id="4047" fill="#2c2c2c"></path>
                    </svg>
                    <span><a>首页</a></span>
                </router-link>
            </div>
            <!-- 分享 -->
            <div>
                <svg @click="shares" t="1704423087961" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="3012" width="25" height="25">
                    <path
                        d="M824.487092 906.287384 100.255236 906.287384c-24.939113 0-44.890404-19.951291-44.890404-44.890404L55.364832 137.165124c0-24.939113 19.951291-44.890404 44.890404-44.890404l319.719435 0c8.479299 0 14.963468 6.48417 14.963468 14.963468s-6.48417 14.963468-14.963468 14.963468L100.255236 122.201656c-8.479299 0-14.963468 6.48417-14.963468 14.963468l0 723.733074c0 8.479299 6.48417 14.963468 14.963468 14.963468l723.733074 0c8.479299 0 14.963468-6.48417 14.963468-14.963468l0-343.660984c0-8.479299 6.48417-14.963468 14.963468-14.963468s14.963468 6.48417 14.963468 14.963468l0 343.660984C869.377496 885.837311 848.927423 906.287384 824.487092 906.287384z"
                        p-id="3013"></path>
                    <path
                        d="M854.414028 410.497808c-8.479299 0-14.963468-6.48417-14.963468-14.963468L839.45056 122.201656l-286.799805 0c-8.479299 0-14.963468-6.48417-14.963468-14.963468s6.48417-14.963468 14.963468-14.963468l316.726741 0 0 303.25962C869.377496 404.013639 862.394545 410.497808 854.414028 410.497808z"
                        p-id="3014"></path>
                    <path
                        d="M400.02338 577.091086c-3.990258 0-7.481734-1.496347-10.474428-4.48904-5.985387-5.985387-5.985387-15.46225 0-20.948855l454.390648-454.390648c5.985387-5.985387 15.46225-5.985387 20.948855 0 5.985387 5.985387 5.985387 15.46225 0 20.948855l-454.390648 454.390648C407.505114 575.594739 403.514856 577.091086 400.02338 577.091086z"
                        p-id="3015"></path>
                </svg>
                <span>分享</span>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
    data() {
        return {
            activeName: 'first1',
            moblie: [],
            popular: [],
            avatard: [
            {
                img:"https://img2.baidu.com/it/u=232443195,1771632598&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                name:"推荐"
            },
            {
                img:"https://pic.rmb.bdstatic.com/bjh/news/32b95063d52b5434e194ff8ce4307b3e.png",
                name:"熊本熊表情"
            },
            {
                img:"https://pic.rmb.bdstatic.com/bjh/news/d93905713283badfb096aad724706270.png",
                name:"GIF动图表情"
            },
            {
                img:"https://pic.rmb.bdstatic.com/bjh/news/d1f7389aa1015b761e0ba9f3be7e27eb.png",
                name:"恶搞明星"
            },
            {
                img:"https://pic.rmb.bdstatic.com/bjh/news/ca3ef8d062e15136b9cfb8bcf5b515bc.png",
                name:"恶搞影视"
            },
            {
                img:"https://pic.rmb.bdstatic.com/bjh/news/93fe6e06246c24a973b558096efed466.png",
                name:"魔性小人表情"
            }
        ],
        }
    },
    mounted() {
        axios.get('http://127.0.0.1:3000/wall/hade')
            .then((response) => {
                this.moblie = response.data.data;
            })
        axios.get('http://127.0.0.1:3000/wall/popular')
            .then((response) => {
                this.popular = response.data.data;
            })
        axios.get('http://127.0.0.1:3000/wall/avatarlist')
            .then((response) => {
                this.avatarlist = response.data.data;
            })
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        shares() {
            alert("已分享")
        }
    }
}
</script>
<style>
.dropdown {
    position: relative;
    display: inline-block;
}

.you {
    margin: 10px 10px 6px 350px;
    height: 25px;
    border: none;
    float: right;
    font-size: 20px;
    background-color: white;
}

.dropdown-content {
    width: 100%;
    height: 620px;
    display: none;
    position: absolute;
    margin-top: 35px;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.dropdown-content div {
    width: 70px;
    height: 70px;
    margin: 10px;
    background-color: antiquewhite;
    float: left;
}
.biaoqian{
    width: 100%;
    height: 30px;
    border-bottom: 1px solid gray;
    margin-left: 10px;
    color: gray;
}

.dropdown-content img {
    width: 100%;
    height: 70px;
}

.dropdown-content p {
    text-align: center;
    font-size: 10px;
}

.dropdown:hover .dropdown-content {
    display: block;
}

.down {
    width: 100%;
    height: 40px;
    float: left;
    margin-top: -30px;
}

.drop-down {
    width: 100%;
    height: 40px;
    float: left;
    margin-top: 50px;
    z-index: 100
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
    margin: -35px 10px 0px 60px;
    border-radius: 3px;
    background-color: rgb(242, 242, 242);
    line-height: 30px;
    /* 文字行高等于输入框高度 */
    padding-left: 30px;
    /* 左侧留出空间给背景图片 */
}

.footert svg {
    margin-top: 1px;
    margin-left: 8px;
}

.footert span {
    font-size: 12px;
    margin-left: 8px;
    margin-top: 10px;
    color: black;
}

.footert div {
    width: 40px;
    height: 40px;
    margin-left: 70px;
    margin-right: 70px;
    margin-top: 2px;
    float: left;
}

.footert {
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    background-color: white;
}

.chat img {
    width: 100%;
    height: 110px;
    border-radius: 4px;
}

.chat div {
    width: 111px;
    height: 110px;
    margin-top: 20px;
    float: left;
    margin: 6px;
    border-radius: 4px;
}

.chat {
    width: 100%;
    height: 900px;
}

.haders {
    width: 100%;
    height: 50px;
    position: fixed;
    top: 0;
    background-color: white;
    color: black;
    z-index: 100
}

.haders a {
    text-decoration: none;
    font-size: 30px;
    line-height: 45px;
    margin-left: 10px;
}

a {
    text-decoration: none;
}

.haders span {
    margin-left: 130px;
}
</style>
    