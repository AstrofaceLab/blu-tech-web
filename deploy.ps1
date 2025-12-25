# Netlify Deployment - Blu Tech Website
# Simple deployment script

Write-Host "🚀 Building Blu Tech Website..." -ForegroundColor Cyan
Write-Host ""

# Build the project
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Build successful!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📤 Next Steps:" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Option 1 - Drag & Drop (Easiest):" -ForegroundColor Cyan
    Write-Host "  1. Go to: https://app.netlify.com" -ForegroundColor White
    Write-Host "  2. Login: blessingotakiti890@gmail.com" -ForegroundColor White
    Write-Host "  3. Click 'Add new site' → 'Deploy manually'" -ForegroundColor White
    Write-Host "  4. Drag the .next folder" -ForegroundColor White
    Write-Host ""
    Write-Host "Option 2 - CLI:" -ForegroundColor Cyan
    Write-Host "  1. npm install -g netlify-cli" -ForegroundColor White
    Write-Host "  2. netlify login" -ForegroundColor White
    Write-Host "  3. netlify deploy --prod --dir=.next" -ForegroundColor White
    Write-Host ""
    Write-Host "Domain: blutechafrica.com" -ForegroundColor Green
}
else {
    Write-Host ""
    Write-Host "❌ Build failed!" -ForegroundColor Red
    Write-Host "Fix errors and try again." -ForegroundColor Yellow
}
