import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      <div class="footer-content">
        <p>Made with ❤️ | © {{currentYear}} Jonah Carpenter</p>
        <div class="social-links">
          <a href="https://github.com/jonahgcarpenter/aishoppinglist" target="_blank">GitHub</a>
        </div>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
