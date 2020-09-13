module.exports.getConsulting = (req, res) => {
    //токен и id чата берутся из config.json
    let http = require('request')
    let reqBody = req.body
    //каждый элемент обьекта запихиваем в массив
    let fields = [
        '<b>Новый запрос на консультирование:</b>',
        '<b>ФИО</b>: ' + reqBody.userName,
        '<b>Номер телефона</b>: ' + reqBody.phone,
        '<b>Email</b>: ' + reqBody.email,
        '<b>Комментарий</b>: ' + reqBody.comment,
    ]
    let msg = ''
    //проходимся по массиву и склеиваем все в одну строку
    fields.forEach(field => {
        msg += field + '\n'
    });
    //кодируем результат в текст, понятный адресной строке
    msg = encodeURI(msg)
    //делаем запрос
    http.post(`https://api.telegram.org/botXXXXXXXXXX/sendMessage?chat_id=XXXXXXX&parse_mode=html&text=${msg}`, function (error, response, body) {
        res.writeHead(301,
            {Location: 'http://localhost:5001/#form'}
        );
        return res.end();
    });

}