import {Injectable} from "@angular/core";
import {Overlay, OverlayConfig} from "@angular/cdk/overlay";
import {ComponentPortal, ComponentType} from "@angular/cdk/portal";
import {EntryAddedOverlayComponent} from "../overlays/entry-added-overlay/entry-added-overlay.component";
import {Router} from "@angular/router";

interface EntryAddedOverlayConfig {
  panelClass?: string;
  hasBackdrop?: boolean;
  backdropClass?: string;
}

const DEFAULT_CONFIG: EntryAddedOverlayConfig = {
  hasBackdrop: true,
  backdropClass: 'dark-backdrop',
  panelClass: 'tm-file-preview-dialog-panel'
}

@Injectable()
export class EntryAddedOverlayService {

  constructor(
    private overlay: Overlay,
    private router: Router) { }

  public open(
    config: EntryAddedOverlayConfig,
    component: ComponentType<any> = EntryAddedOverlayComponent,
    commands = ['/']) {
    const dialogConfig = { ...DEFAULT_CONFIG, ...config };
    const overlayRef = this.createOverlay(dialogConfig);
    const filePreviewPortal = new ComponentPortal(component);

    const timoutRef = setTimeout(() => {
      overlayRef.dispose()
      this.router.navigate(commands);
    }, 3000);
    overlayRef.backdropClick().subscribe(_ => {
      overlayRef.dispose();
      clearTimeout(timoutRef);
      this.router.navigate(commands);
    });

    overlayRef.attach(filePreviewPortal);
  }

  private createOverlay(config: EntryAddedOverlayConfig) {
    const overlayConfig = this.getOverlayConfig(config);
    return this.overlay.create(overlayConfig);
  }

  private getOverlayConfig(config: EntryAddedOverlayConfig): OverlayConfig {
    const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayConfig = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    });

    return overlayConfig;
  }
}
