import umbrella from 'umbrellajs'

export default function(v){
    const u = umbrella.u
    
    var $content = u(v).find('.compo-toggle__content')
    var $trigger = u(v).find('.compo-toggle__trigger')
    var height  = $content.size().height + 'px'

    if( !u(v).attr('data-show') ) {
        $content.nodes[0].style.height = '0px'
    } else {
        $content.nodes[0].style.height = height
    }

    $trigger.handle('click', function(e) {
        if( $content.nodes[0].style.height !== '0px' ) {
            $content.nodes[0].style.height = '0px'
        } else {
            $content.nodes[0].style.height = height
        }
    })
}