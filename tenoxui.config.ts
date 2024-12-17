import { plugins } from 'tenoxui-plugin-utility'

export default {
  shorthand: {
    tra: 'transition'
  },
  alias: {
    btn: '[bdr,outline]-none bg-neutral-900 hover:bg-neutral-800 [transition]-300ms br-6px px-12px h-35px text-neutral-100 tn-capitalize fw-500',
    'darkmode-wrapper':
      '[transition]-300ms [transition-property]-[color,backhround-color] bg-neutral-50 text-neutral-950'
  },
  colorOptions: {
    reverse: true
  },
  plugins: [plugins.boxShadow, plugins.typography]
}
