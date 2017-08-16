/*
**  模块管理
**
*/

<script>
import _tpl from './module.html';
import Base from 'pages/base-page/base';
export default {
    template: _tpl,
    components: {
        "m-base": Base
    },
    data() {
        return {
          list:[]
        }
    }
}
</script>

