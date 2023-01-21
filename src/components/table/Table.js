import {ExcelComponent} from '@core/ExcelComponent';

export class Table extends ExcelComponent {
    static className = 'excel__table'
    static htmlData = 'asdasdasd'

    toHTML() {
        return '<h1>toolbar</h1>'
    }
}
