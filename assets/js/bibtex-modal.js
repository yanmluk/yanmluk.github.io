// BibTeX Modal functionality
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('bibtexModal');
  const closeBtn = document.querySelector('.bibtex-modal-close');
  const copyBtn = document.getElementById('copyBibtexBtn');
  const bibtexContent = document.getElementById('bibtexContent');

  // Close modal when clicking the X button
  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  }

  // Close modal when clicking outside of it
  if (modal) {
    modal.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  }

  // Close modal with Escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'block') {
      modal.style.display = 'none';
    }
  });

  // Copy BibTeX content to clipboard
  if (copyBtn) {
    copyBtn.addEventListener('click', function() {
      const textToCopy = bibtexContent.textContent;
      
      if (navigator.clipboard && window.isSecureContext) {
        // Use modern clipboard API
        navigator.clipboard.writeText(textToCopy).then(function() {
          const originalText = copyBtn.textContent;
          copyBtn.textContent = 'Copied!';
          copyBtn.style.backgroundColor = '#28a745';
          
          setTimeout(function() {
            copyBtn.textContent = originalText;
            copyBtn.style.backgroundColor = '#007bff';
          }, 2000);
        }).catch(function(err) {
          console.error('Failed to copy: ', err);
          fallbackCopyTextToClipboard(textToCopy);
        });
      } else {
        // Fallback for older browsers
        fallbackCopyTextToClipboard(textToCopy);
      }
    });
  }

  // Fallback copy function for older browsers
  function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      const successful = document.execCommand('copy');
      if (successful) {
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        copyBtn.style.backgroundColor = '#28a745';
        
        setTimeout(function() {
          copyBtn.textContent = originalText;
          copyBtn.style.backgroundColor = '#007bff';
        }, 2000);
      }
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }
    
    document.body.removeChild(textArea);
  }

  // Function to open modal with BibTeX content
  window.openBibtexModal = function(bibtexUrl) {
    if (modal && bibtexContent) {
      // Fetch the BibTeX content
      fetch(bibtexUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.text();
        })
        .then(data => {
          bibtexContent.textContent = data;
          modal.style.display = 'block';
        })
        .catch(error => {
          console.error('Error fetching BibTeX:', error);
          bibtexContent.textContent = 'Error loading BibTeX content. Please try again.';
          modal.style.display = 'block';
        });
    }
  };
});
