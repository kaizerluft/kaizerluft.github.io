let mhide = document.getElementsByClassName('mhide');
for (let i = 0; i < mhide.length; i++)
{
	mhide[i].addEventListener('click', function()
	{
		this.classList.toggle('active');
		let chide = this.nextElementSibling;
		if (chide.style.maxHeight) chide.style.maxHeight = null;
		else chide.style.maxHeight = chide.scrollHeight + 'px';
	})
}