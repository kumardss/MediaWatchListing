import { Component } from '@angular/core';

@Component({
    selector: 'mw-app',
    templateUrl:'app/app.component.html',
    styleUrls: ['app/app.component.css']
})
export class AppComponent{
    onMediaItemDelete(mediaItem){
        alert('Delete');
    };
    
    mediaItems=[
        {
        id:1,
        name:"Resident Evil",
        medium:"Series",
        category:"Jombie",
        year:2008,
        watchedOn:1232654846,
        isFavorite:false
    },
    {
        id:1,
        name:"Resident Evil",
        medium:"Series",
        category:"Jombie",
        year:2008,
        watchedOn:1232654846,
        isFavorite:false
    },
    {
        id:1,
        name:"Resident Evil",
        medium:"Series",
        category:"Jombie",
        year:2008,
        watchedOn:1232654846,
        isFavorite:false
    },
    {
        id:1,
        name:"Resident Evil",
        medium:"Series",
        category:"Jombie",
        year:2008,
        watchedOn:1232654846,
        isFavorite:false
    },
    {
        id:1,
        name:"Resident Evil",
        medium:"Series",
        category:"Jombie",
        year:2008,
        watchedOn:1232654846,
        isFavorite:false
    },
    {
        id:1,
        name:"Resident Evil",
        medium:"Series",
        category:"Jombie",
        year:2008,
        watchedOn:1232654846,
        isFavorite:false
    },
    {
        id:1,
        name:"Resident Evil",
        medium:"Series",
        category:"Jombie",
        year:2008,
        watchedOn:1232654846,
        isFavorite:false
    }];
}