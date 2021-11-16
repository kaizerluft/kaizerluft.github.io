let hidden = document.getElementsByClassName('hide');
for (let i = 0; i < hidden.length; i++)
{
	hidden[i].addEventListener('click', function()
	{
		this.classList.toggle('active');
		let content = this.nextElementSibling;
		if (content.style.maxHeight) content.style.maxHeight = null;
		else content.style.maxHeight = content.scrollHeight + 'px';
	})
}