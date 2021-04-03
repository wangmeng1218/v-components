// import XEUtils from 'xe-utils';
import VXETable from 'vxe-table';

VXETable.renderer.add('operate', {
    renderDefault (h) {
        console.log('滴沥滴沥滴沥');
        // var start = (new Date()).getTime();
        // while((new Date()).getTime() - start < 100) {
        //     continue;
        // }
        return [h('span',
            {
                style: {
                    color: 'red'
                }
            },
            '啦啦啦'
        )];
        // return '5t5';
    }
});
