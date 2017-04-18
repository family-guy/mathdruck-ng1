import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { MathjaxModule } from '../mathjax/mathjax.module';

import { TexBlobComponent } from './components/tex-blob.component';

@NgModule({
	declarations: [TexBlobComponent],
	imports: [
		CommonModule,
		HttpModule,
		MathjaxModule
	],
	exports: [TexBlobComponent],
	providers: []
})
export class TexBlobModule {}
