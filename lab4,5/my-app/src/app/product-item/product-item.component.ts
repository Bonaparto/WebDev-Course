import {Component, Input, OnInit} from '@angular/core'
import {Item} from '../app.component'

@Component({
    selector: 'app-product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.scss']
})

export class ProductItemComponent implements OnInit {
    @Input() item: Item = {
        img: '',
        name: '',
        description: '',
        rating: '',
        category: '',
        shareLink: '',
        link: '',
        likes: 0,
        isShown: true
    }

    increaseLikesAmount() {
        this.item.likes++;
    }

    remove() {
        this.item.isShown = false;
    }

    ngOnInit(): void {
    }
} 