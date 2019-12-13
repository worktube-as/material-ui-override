import { offset, borderRadius, colorDark } from 'worktube-theme/core'

const MuiListItemIcon = {
    root: {
        padding: offset('4'),
        marginRight: offset('8'),
        backgroundColor: colorDark.lighten5,
        borderRadius: borderRadius['4'],
        // color: 'rgba(0, 0, 0, 0.53)',
        display: 'inline-flex',
        minWidth: 0,
        flexShrink: 0
    },
    // alignItemsFlexStart: {
    //     marginTop: offset('4')
    // }
}

export default MuiListItemIcon
