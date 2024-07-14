/** @file jsx 写法，包裹加入到组件上的通用逻辑 */

import { defineComponent } from 'vue';

export default wrapper = defineComponent({

  setup (props, { slots }) {
    return <div>
      <pre>{ props.codeContent }</pre>
      { props.children }
    </div>
  }

});
