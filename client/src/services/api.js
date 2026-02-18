const API_URL = import.meta.env.VITE_API_URL;

/**
 * Helper to handle fetch responses and error parsing
 */
async function handleResponse(response) {
    const isJson = response.headers.get("content-type")?.includes("application/json");
    const data = isJson ? await response.json() : null;

    if (!response.ok) {
        // Construct error object
        const error = new Error(data?.message || response.statusText);
        error.status = response.status;
        error.errors = data?.errors || []; // Array of validation errors if present
        throw error;
    }

    return data;
}

/**
 * Submit Contact Form
 * POST /api/contact
 */
export async function submitContactForm(formData) {
    try {
        const response = await fetch(`${API_URL}/api/contact`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        return await handleResponse(response);
    } catch (error) {
        // If it's a network error (fetch failed completely), it won't have a status
        if (!error.status) {
            throw new Error("Erreur réseau, vérifiez votre connexion internet.");
        }
        throw error;
    }
}

/**
 * Submit Quote Form
 * POST /api/quote
 */
export async function submitQuoteForm(formData) {
    try {
        const response = await fetch(`${API_URL}/api/quote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        return await handleResponse(response);
    } catch (error) {
        if (!error.status) {
            throw new Error("Erreur réseau, vérifiez votre connexion internet.");
        }
        throw error;
    }
}
