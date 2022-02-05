$(function($) {
    $('body').smroulette({
        // ячейки от 3 до 10. Иначе будет ошибка
        discText: [
            'ISLIMга 15% чегирма',
            'Марафон учун 20% чегирма',
            'Совринлар ўйинида иштирок етиш',
            '1 млн сўмлик тиражда иштирок етиш',
        ],

        // Выбор поля для сбора контактных данных телефон или email (tel/email/custom)
        input: 'custom',

        sectionText: {
            placeholderText: 'Рақамни киритинг',
            phoneMask: '+000(00)000-00-00',
            respondText: 'Менежеримиз буюртмани қабул қилиш ва ютуқлар ҳақида кўпроқ маълумот бериш учун сиз билан боғланади.',

            // Включить или отключить чекбокс с пользовательским соглашением
            agreement: {
                isRequired: true, //true - включить / false - выключить
                isLink: false, // тут можно задать ссылку на соглашение, например так 'https://smartlanding.biz'
            },
        },

        // включчть или отключть возможность вращать только 1 раз за определенный промежуток времени. 1 - равно 1 раз в день. 2 - 1 раз в 2 дня и так далее.
        cookiesLife: false,

        // Положение кнопки, вызывающей модальное окно.
        position: {
            giftPosition: 'right',
        },

        met: () => {
            console.log('wheel');
        }
    });
});