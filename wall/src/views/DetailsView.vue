<template>
    <div class="box">
        <div class="haderst">
            <div>
                <router-link to="/head">
                    <button style="margin-top: 3px;">

                        <svg t="1704710254351" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="3849" width="25" height="25">
                            <path
                                d="M401.066667 512l302.933333 302.933333-59.733333 59.733334L341.333333 571.733333 281.6 512 341.333333 452.266667l302.933334-302.933334 59.733333 59.733334L401.066667 512z"
                                fill="#2c2c2c" p-id="3850"></path>
                        </svg>

                    </button>
                </router-link>
                <router-link to="/">
                    <button style="float:right;margin-top: 2px;">
                        <svg t="1704710091508" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="2498" width="25" height="25">
                            <path
                                d="M950.3 489.4L533.8 73c-12-12-31.5-12-43.5 0L73.9 489.4c-19.4 19.4-5.7 52.5 21.7 52.5h66.8v353.7c0 35.3 28.7 64 64 64H384V831.8c0-35.3 28.7-64 64-64h128c35.3 0 64 28.7 64 64v127.8h156.6c35.3 0 64-28.7 64-64V541.9h67.8c27.5 0 41.2-33.2 21.9-52.5z"
                                fill="#2c2c2c" p-id="2499"></path>
                        </svg>
                    </button>
                </router-link>

            </div>
        </div>
        <div class="shen">
            <img class="shenimg"
                src="https://img0.baidu.com/it/u=3021930410,1043952341&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1704819600&t=7d5c4d5f04fe396531a8e3f10f8fd767">
        </div>
        <div class="pendant">
            <div>
                <h4>头像挂件DIY</h4>
            </div>
        </div>
        <div class="footerd">
            <div>
                <p>
                    <span>
                        <svg t="1704711550003" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="5294" width="25" height="25">
                            <path
                                d="M758.5 931h-497c-50.453 0-91.5-41.047-91.5-91.5v-335c0-50.453 41.047-91.5 91.5-91.5h497c50.453 0 91.5 41.047 91.5 91.5v335c0 50.453-41.047 91.5-91.5 91.5z m-497-454c-15.164 0-27.5 12.336-27.5 27.5v335c0 15.163 12.336 27.5 27.5 27.5h497c15.163 0 27.5-12.337 27.5-27.5v-335c0-15.164-12.337-27.5-27.5-27.5h-497z"
                                fill="#e6e6e6" p-id="5295"></path>
                            <path
                                d="M512.1 791c-17.673 0-32-14.327-32-32V588.999c0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32V759c0 17.673-14.328 32-32 32zM297.472 446.595c-17.673 0-32-14.327-32-32 0-109.504 25.127-192.098 74.684-245.486 22.309-24.034 49.483-42.036 80.767-53.505 27.139-9.95 57.454-14.995 90.101-14.995 76.909 0 134.36 20.286 175.638 62.018 51.002 51.562 75.166 134.096 73.874 252.317-0.191 17.552-14.481 31.649-31.99 31.65-0.12 0-0.237 0-0.357-0.002-17.672-0.193-31.842-14.676-31.648-32.348 1.08-98.854-17.552-168.368-55.379-206.611-28.637-28.952-71.205-43.025-130.137-43.025-52.665 0-94.371 16.163-123.96 48.04-38.214 41.169-57.59 109.113-57.59 201.946-0.003 17.674-14.329 32.001-32.003 32.001z"
                                fill="#e6e6e6" p-id="5296"></path>
                        </svg>
                    </span>
                    立即下载
                </p>
            </div>
        </div>
    </div>
</template>
<script>

</script>
<style>
.footerd p {
    float: left;
}

.footerd span {
    float: left;
    margin: 5px 10px 10px 21px;
}

.footerd div {
    width: 150px;
    height: 50px;
    margin: 25px 0 25px 110px;
    color: white;
    text-align: center;
    line-height: 50px;
    border-radius: 30px;
    background-color: rgb(39, 122, 255);
    border: none;
}

.pendant div {
    width: 150px;
    height: 50px;
    margin: 25px 0 25px 110px;
    color: white;
    text-align: center;
    line-height: 50px;
    border-radius: 30px;
    background-color: palevioletred;
    border: none;
}

.haderst button {
    border: none;
    background-color: transparent;
}

.haderst div {
    width: 80px;
    height: 30px;
    margin: 10px 0 0 10px;
}

.shenimg {
    width: 100%;
    height: 370px;
}

.footerd {
    width: 100%;
    height: 97px;
    float: left;
}

.pendant {
    width: 100%;
    height: 100px;
    float: left;
    background-color: rgb(238, 238, 238);
}

.shen {
    width: 100%;
    height: 370px;
    float: left;
}

.haderst {
    width: 100%;
    height: 100px;
    float: left;
}

.box {
    width: 100%;
    height: 100vh;
}
</style>