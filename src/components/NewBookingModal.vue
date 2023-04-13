<template>
    <div class="wrapper-booking-modal" v-if="showBookingModal" @click.self="closeBookingModal(!showBookingModal)">
        <div class="booking-modal">
            <div class="pd-booking-modal">
                <div class="input-name">
                    <input type="text" placeholder="姓" class="first-name">
                    <input type="text" placeholder="名" class="last-name">
                </div>
                <div class="input-name-transcription">
                    <input type="text" placeholder="セイ" class="first-name">
                    <input type="text" placeholder="メイ" class="last-name">
                </div>
                <div class="booking-person">
                    <div>主担当</div>
                    <div class="container-buttons">
                        <button>担当者選択</button>
                        <button>お客様選択</button>
                        <button>予定あり</button>
                    </div>
                </div>
                <div class="appointment-datetime">
                    <div class="title">予約時間</div>
                    <div class="wrapper-appointment-date">
                        <img src="../assets/images/calendar_icon.svg" alt="date">
                        <input type="text" placeholder="yyyy/mm/dd" id="date-picker" class="appointment-date" required>
                    </div>
                    <div class="wrapper-appointment-time">
                        <div class="input-start-time">
                            <img src="../assets/images/time_icon.svg" alt="time">
                            <input type="text" placeholder="00:00" id="start-time">
                        </div>
                        <span>〜</span>
                        <div class="input-end-time">
                            <img src="../assets/images/time_icon.svg" alt="time">
                            <input type="text" placeholder="00:00" id="end-time">
                        </div>
                    </div>
                </div>
                <div class="title-table">税込合計</div>
                <div class="wrapper-table">
                    <table cellspacing="0">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>メニュー</th>
                                <th>担当者</th>
                                <th>数量</th>
                                <th>技商</th>
                                <th>単価</th>
                                <th>税込金額</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="add">+</div>
                <div class="wrapper-textarea">
                    <label for="textarea-note">来店メモ</label>
                    <textarea name="textarea-note" id="textarea-note"></textarea>
                </div>
                <div class="wrapper-buttons">
                    <button class="btn-1">クリア</button>
                    <button class="btn-2">来店メモ</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        showBookingModal: Boolean,
    })
    const emit = defineEmits(['closeBookingModal']);
    const closeBookingModal = (status) => {
        emit('closeBookingModal', status)
    }
</script>

<style scoped>
.wrapper-booking-modal {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 20;
    overflow-x: hidden;
}
.booking-modal {
    position: absolute;
    top: 0;
    right: 0;
    width: 550px;
    min-height: 768px;
    background-color: var(--white);
}
.pd-booking-modal {
    position: relative;
    margin: 20px;
}
.input-name, .input-name-transcription {
    display: flex;
    margin-bottom: 15px;
}
.first-name, .last-name {
    display: block;
    width: 130px;
    height: 40px;
    border: 1px solid var(--light-gray);
    border-radius: 4px;
    padding-left: 10px;
    margin-right: 15px;
}
.booking-person {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
}
.container-buttons {
    display: flex;
    flex-direction: column;
}
.container-buttons button {
    width: 120px;
    height: 40px;
    border: 1px solid var(--light-black);
    margin-bottom: 18px;
    margin-left: 15px;
    font-size: 18px;
    font-weight: bold;
    color: var(--light-black);
}
.container-buttons button:nth-child(2) {
    color: var(--white);
    background-color: var(--light-black);
}
.booking-person div:first-of-type {
    font-size: 16px;
    font-weight: bold;
    color: var(--light-black);
    margin-top: 9px;
}
.appointment-datetime {
    margin-top: 80px;
}
.appointment-date {
    width: 100%;
    height: 40px;
    padding-left: 40px;
}
.wrapper-appointment-date {
    position: relative;
    margin-bottom: 15px;
}
.wrapper-appointment-date img {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
}
.title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
}
.title::after {
    content: '*';
    position: relative;
    top: 6px;
    margin-left: 4px;
    font-size: 24px;
    font-weight: bold;
    color: var(--red);

}
.wrapper-appointment-time {
    display: flex;
    justify-content: space-between;
}
.input-start-time, .input-end-time {
    position: relative;
}
.input-start-time img, .input-end-time img {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
}
#start-time,#end-time {
    width: 220px;
    height: 40px;
    padding-left: 40px;
}
.wrapper-appointment-time span {
    align-self: center;
    font-size: 24px;
    transform: scaleX(-1);
}
.title-table {
    margin: 15px 107px 13px 0;
    text-align: right;
    font-size: 11px;
}

th, td {
    height: 35px;
}
tbody tr td {
  border: 2px solid var(--light-gray);
  border-top-width: 0;
  border-left-width: 0;
}
tbody tr td:first-of-type {
    border-left: 2px solid var(--light-gray);
}
tbody tr:first-of-type td {
    border-top: 2px solid var(--light-gray);
}

thead tr th {
    background-color: var(--white-gray);
    border-right: 2px solid var(--white);
    font-size: 13px;
}
thead tr th:last-of-type {
    border-right: none;
}
thead th:nth-of-type(1) {
    width: 25px;
}
thead th:nth-of-type(2) {
    width: 105px;
}
thead th:nth-of-type(3) {
    width: 60px;
}
thead th:nth-of-type(4) {
    width: 45px;
}
thead th:nth-of-type(5) {
    width: 45px;
}
thead th:nth-of-type(6) {
    width: 125px;
}
thead th:nth-of-type(7) {
    width: 105px;
}
tbody tr td:nth-of-type(3) {
    font-size: 11px;
    padding: 0 6px;
}
tbody tr td:nth-of-type(2), tbody tr td:nth-of-type(6) {
    padding: 0 8px;
}
tbody tr td:first-of-type {
    text-align: center;
}
tbody tr td:nth-of-type(4), tbody tr td:nth-of-type(5) {
    text-align: center;
}
tbody tr td:nth-of-type(7) {
    text-align: right;
    padding: 0 8px;
}
tbody tr td > div {
    color: #0000FF;
}
.add {
    position: absolute;
    right: 0;
    width: 40px;
    border: 1px solid var(--light-gray);
    border-radius: 10px;
    text-align: center;
    font-size: 24px;
    padding: 5px 0;
    margin-top: 10px;
}
.wrapper-textarea label {
    display: inline-block;
    margin-top: 56px;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
}
#textarea-note {
    width: 100%;
    height: 120px;
}
.wrapper-buttons {
    position: relative;
    margin-top: 15px;
}
.btn-1, .btn-2 {
    height: 40px;
    font-weight: bold;
    padding: 5px 20px;
    border-radius: 4px;
}
.btn-1 {
    width: 38%;
    border: 1px solid var(--dark-gray);
    background-color: var(--light-gray);
}
.btn-2 {
    position: absolute;
    top: 0;
    right: 0;
    width: 58%;
    border: 1px solid var(--dark-gray);
    background-color: var(--dark-gray);
    color: var(--white);
}
</style>