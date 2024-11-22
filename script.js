document.addEventListener('DOMContentLoaded', () => {
    const postButton = document.querySelector('.bg-purple-600');
    const warningModal = document.getElementById('warningModal');
    
    postButton.addEventListener('click', () => {
        const textarea = document.querySelector('textarea');
        const content = textarea.value.toLowerCase();
        
        if (!content.includes('quantum') || !content.includes('startup')) {
            warningModal.classList.remove('hidden');
        }
    });
    
    warningModal.querySelector('button').addEventListener('click', () => {
        warningModal.classList.add('hidden');
    });
}); 