<script setup>
import axios from "axios";
import {onMounted, ref} from "vue";

const ip = ref("");
const location = ref("");
const countryFlag = ref("");
const userOS = ref("");

const getIpAndGetFlags = async () => {
    await axios.get('https://geo.ipify.org/api/v2/country?apiKey=at_8elolmPXO1vOVNVOJfcGSHEgNpX3V', {
        withCredentials: false,
    }).then(function (rs) {
        console.log("your ip: ", rs);
        ip.value = rs.data.ip;
        location.value = rs.data.location.country;
    }).catch(function (error) {
        console.log(error);
    });

    await axios.get("https://restcountries.com/v3.1/all", {
        withCredentials: false,
    }).then(function (rs) {
        console.log("your flag: ", rs.data);
        console.log("2: ", rs.data[193].flags.png);
        console.log("length: ", rs.data.length);
        console.log("location: ", location.value);
        for (let i = 0; i < rs.data.length; i++) {
            if (rs.data[i].cca2 === location.value) {
                countryFlag.value = rs.data[i].flags.png;
                break;
            }
        }
        console.log("flag: ", countryFlag.value)
    }).catch(function (error) {
        console.log(error);
    });
}

const getOS = () => {
    const userAgent = navigator.userAgent;
    console.log("userAgent: ", userAgent)
    userOS.value = "Không xác định";

    if (userAgent.includes("Win")) {
        userOS.value = "Windows";
    } else if (userAgent.includes("Mac")) {
        userOS.value = "macOS";
    } else if (userAgent.includes("Linux")) {
        userOS.value = "Linux";
    } else if (userAgent.includes("Android")) {
        userOS.value = "Android";
    } else if (userAgent.includes("iOS")) {
        userOS.value = "iOS";
    }
    console.log("OS: ", userOS.value)
    return userOS;
}
onMounted(() => {
    getIpAndGetFlags();
    getOS();
})
</script>

<template>
    <div class="boCongAn">
        <h5>BỘ CÔNG AN</h5>
        <h5 style="font-weight: bold">CỤC AN NINH MẠNG VÀ PHÒNG CHỐNG TỘI PHẠM CÔNG NGHỆ CAO</h5>
        <h5 style="font-weight: bold">HỆ THỐNG QUẢN LÝ VÀ GIÁM SÁT AN NINH MẠNG</h5>
        <img src="../assets/image.jpg" alt="an-ning-mang">

        <p>Việc truy cập các trang web xem phim đồi truỵ là hành vi vi phạm pháp luật Việt Nam.</p>
        <p>Được quy định tại Điều 326 Bộ luật hình sự 2015 được sửa đổi bởi Khoản 124 Điều 1 Luật sửa đổi Bộ luật Hình
            sự 2017 của </p>
        <p>nước Cộng hoà xã hội chủ nghĩa Việt Nam quy định về tội truyền bá văn hóa phẩm đồi trụy.</p>

        <p>Cơ quan Công an sẽ lưu lại log này để triệu tập xử lý!</p>
        <br>
        <p>Mọi thông tin tố giác tội phạm có liên quan xin gửi về:</p>
        <p>Cục An ning mạng và phòng chống tội phạm sử dụng Công nghệ cao, số 40A, Hàng Bài, Hà Nội.</p>

        <table class="showLog">
            <tr>
                <td>Your IP Address:</td>
            </tr>
            <tr>
                <td>{{ ip }}</td>
            </tr>
            <tr>
                <td>Your OS:</td>
            </tr>
            <tr>
                <td>{{ userOS }}</td>
            </tr>
            <tr>
                <td>Your Country:</td>
            </tr>
            <tr>
                <td>
                    <img :src="countryFlag"
                        alt="countryFlag" style="max-width: 25px; height: auto">
                    {{ location }}
                </td>
            </tr>
        </table>

    </div>


</template>

<style scoped>

</style>