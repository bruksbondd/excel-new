import {Excel} from '@/components/excel/Excel'
import './scss/index.scss'
import {Header} from '@/components/header/Header'
import {Tollbar} from '@/components/toolbar/Tollbar'
import {Formula} from '@/components/formula/Formula'
import {Table} from '@/components/table/Table'

const excel = new Excel('#app', {
  components: [Header, Tollbar, Formula, Table]
})

console.log('Excel', excel.render())
