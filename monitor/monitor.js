window.CSApplication = window.CSApplication || {};

/**
 * Модуль отображения тестовой информации
 */
class MonitorModule {

    /**
     * Инициализация свойств
     */
    properties() {
    }

    /**
     * Инициализация модуля
     */
    constructor() {
        this.properties();
    }

    /**
     * Отображение схемы подстанции
     */
    showSubstationScheme() {
        try {
            // Показываем загрузочный спиннер (опционально, в качестве примера)
            CSAPI.v1.showSpinner(true).then(() => {
                // Получаем атрибуты объекта
                const objectData = CSAPI.v1.getDataObjects("search").data[0].attributes;
                // Получаем атрибут "Дисп.наим." (Пример: {label:"Дисп.наим.", value:"ТП-81"})
                const attrObject = objectData.find(attr => attr.label === "Дисп.наим.");
                //---------------------------------------------
                // ЗДЕСЬ ВАША ЛОГИКА
                if (typeof cefInteraction !== "undefined") {
                    cefInteraction.navigateCallback(attrObject.value);
                    
                }
                //---------------------------------------------
                // Скрываем загрузочный спиннер
                CSAPI.v1.showSpinner(false);
            });

        } catch (err) {
            // Сообщение об ошибке
            console.log(err);
            // Скрываем загрузочный спиннер
            CSAPI.v1.showSpinner(false);
        }
    }
}

// Ссылка на глобальный доступ к классу модулю
CSApplication.monitorModule = new MonitorModule();
