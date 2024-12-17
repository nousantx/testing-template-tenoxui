import { plugins } from 'tenoxui-plugin-utility'

export default {
  shorthand: {
    tra: 'transition'
  },
  alias: {
    btn: '[bdr,outline]-none bg-slate-900 hover:bg-slate-800 [transition]-300ms br-6px px-12px h-35px text-slate-100 tn-capitalize fw-500',
    wrapper:
      '[transition]-300ms [transition-property]-[color,background-color] bg-slate-50 text-slate-950'
  },

  color: {
    DEFAULT: { slate: '#5d6675' },
    dark: { primary: '#2df14c' },
    light: { primary: '#f53089' }
  },
  plugins: [plugins.boxShadow, plugins.typography]
}
