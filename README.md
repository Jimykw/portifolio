
  # Portfolio website
  
  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Publish on GitHub Pages

  This project is configured for GitHub Pages without changing the design.

  1. Create a repository and push this project.
  2. Install dependencies:
    - `npm install`
  3. Publish:
    - `npm run deploy`
  4. In GitHub repository settings, open Pages and select:
    - Source: `Deploy from a branch`
    - Branch: `gh-pages` / root

  After that, your portfolio will be public.

  ### Optional: custom base path

  If needed, you can override the build base path:

  - Windows PowerShell: `$env:VITE_BASE_PATH='/your-repo-name/'; npm run build`
  - Linux/macOS: `VITE_BASE_PATH=/your-repo-name/ npm run build`
  
