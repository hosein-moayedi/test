(function() {
  // Ensure the function is only loaded once
  if (document.getElementById('zibal-trust-badge')) return;

  // Create anchor element for the Zibal trust badge
  const anchorElement = document.createElement('a');
  anchorElement.href = 'javascript:void(0);';
  anchorElement.title = 'پرداخت آنلاین زیبال';
  anchorElement.addEventListener('click', () => {
    window.open(
      'https://gateway.zibal.ir/trustMe/' + window.location.hostname,
      '_blank',
      'width=450, height=600, scrollbars=no, resizable=no'
    );
  });

  // Create image element for the Zibal trust logo
  const imgElement = document.createElement('img');
  imgElement.src = 'https://zibal.ir/trust/assets/1.png';
  imgElement.alt = 'پرداخت آنلاین زیبال';
  imgElement.style.height = '85px';
  imgElement.style.border = '0';

  // Append the image to the anchor
  anchorElement.appendChild(imgElement);

  // Set a unique ID to prevent duplicate inserts
  anchorElement.id = 'zibal-trust-badge';

  // Append to a target container
  const container = document.getElementById('zibal') || document.body;
  container.appendChild(anchorElement);
})();
