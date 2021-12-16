const TelegramApi = require('node-telegram-bot-api')

const token = '5065289015:AAGEjOzcq5VP2qZ_1L_kTWvtfPuHIn31Its'

const bot = new TelegramApi(token, {polling: true})

let auth = []

const options = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: '⠀⠀🔍 сколько будет длиться обучение?⠀⠀', callback_data: 1}],
            [{text: '⠀⠀🔍 Оплата⠀⠀', callback_data: 2}],
            [{text: '⠀⠀🔍 Способы оплаты⠀⠀', callback_data: 3}],
            [{text: '⠀⠀🔍 Сколько занятий и часов в неделю⠀⠀', callback_data: 4}]
        ]
    })
}

bot.setMyCommands([
    {command: '/start', description: 'Начальное приветствие'},
    {command: '/info', description: 'Информация'}
])

bot.on("message", async (msg) => {
    if (msg) {
        const text = msg.text
        const chatId = msg.chat.id
        // await bot.sendMessage(chatId, text)
        if (text === '/start') {
            await bot.sendMessage(chatId, "Доброе утро! Вас приветствует UNIQUE TECH. Lab! \n" +
                "Уважаемые клиенты компании!\n\n" +
                "С ответами на часто задаваемыми вопросами Вы можете ознакомиться ниже, для получения ответа Вам нужно будет выбрать кнопку интересующего Вас вопроса.")
            await bot.sendMessage(chatId, "FAQ:", options)
        } else if (text === '/info') {
            await bot.sendMessage(chatId, "FAQ:", options)
        }
    }
})

bot.on('callback_query', msg => {
    const {data} = msg
    const chatId = msg.message.chat.id
    switch (+data) {
        case 1 : bot.sendMessage(chatId, "Обучение будет длиться 10 месяцев 3 из них будут обучающими и подготовительными а остальные 7 месяцев разработка и работа с проектами.")
            break
        case 2 : bot.sendMessage(chatId, "Оплата составляет 2000 долларов, вы можете оплатить сразу либо каждый месяц 200 долларов оплата за месяц вносится заранее.")
            break
        case 3 : bot.sendMessage(chatId, "Вы можете произвести оплату через элсом либо переводом на карту, вам необходимо сохранить чек об оплате.")
            break
        case 4 : bot.sendMessage(chatId, "Занятия будут проходить в понедельник, среду и пятницу, каждое занятие будет длиться 2 часа, но на стадии разработки длительность сократиться до 1,5 часов. На одного ментора будет приходиться 15-18 студентов, и у студентов на стадии разработки будет один общий продукт овнер.")
            break
        case 5 : bot.sendMessage(chatId, "Оставьте свой номер и имя, и мы Вам обязательно перезвоним. ")
            break
    }
})
