import  i18n  from './i18n';

export default function msg(key, params) {
	if(params) {
		return i18n.t(key, params);
	} else {
		return i18n.t(key);
	}
}
