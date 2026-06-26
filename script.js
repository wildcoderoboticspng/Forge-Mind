document.getElementById('waitlistForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const nameInput = document.getElementById('userName');
    const emailInput = document.getElementById('userEmail');
    const feedback = document.getElementById('formFeedback');
    const submitBtn = document.querySelector('.btn-submit');
    
    // UI State: Loading
    submitBtn.disabled = true;
    submitBtn.innerText = "Processing Allocation...";
    feedback.className = "feedback hidden";

    const payload = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        timestamp: new Date().toISOString()
    };

    try {
        // Replace with your preferred backend endpoint (Vercel Serverless, Supabase, or Netlify Forms)
        // const response = await fetch('YOUR_BACKEND_ENDPOINT', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(payload)
        // });
        
        // Simulating immediate successful execution pipeline
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // UI State: Success
        feedback.innerText = "Allocation Requested. Vetting pipeline initiated.";
        feedback.className = "feedback success";
        
        // Flush inputs
        nameInput.value = "";
        emailInput.value = "";
        
    } catch (error) {
        // UI State: Error Handling
        feedback.innerText = "Submission exception. Verify pipeline connectivity.";
        feedback.className = "feedback error";
    } finally {
        // Reset button state
        submitBtn.disabled = false;
        submitBtn.innerText = "Request Alpha Allocation";
    }
});
