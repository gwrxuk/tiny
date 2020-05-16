import React from 'react'
import { useTranslation } from 'react-i18next'
	

const ContactUs = () => {
const {t,i18n} = useTranslation()
console.log(t);
return(
<div>
	<h1>{t('contactus.label')}</h1>
	<h3>{t('whatwecanhelp.label')}</h3>
	<form>
	<textarea></textarea>
	<input type='submit' value={t('submit.label')}  placeholder={t('letusknow.label')}/>
	</form>
</div>
)

}

export default ContactUs;