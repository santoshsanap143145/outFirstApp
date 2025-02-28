import { Component } from '@angular/core';
import { animal } from '../../models/animal';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {

  animals : Array<animal> = [
    {
      id: 1,
      image: 'https://thumbs.dreamstime.com/b/big-lion-lying-savannah-grass-landscape-characteristic-trees-plain-hills-background-35172905.jpg',
      title: 'Majestic Lion',
      description:
        'Lions are the kings of the jungle, known for their strength and pride.',
        isDisabled: false
    },
    {
      id: 2,
      image: 'https://www.shutterstock.com/image-photo/cute-little-baby-elephant-mother-600nw-2467644619.jpg',
      title: 'Gentle Elephant',
      description:
        'Elephants are the largest land animals, famous for their intelligence and memory.',
        isDisabled: false
    },
    {
      id: 3,
      image: 'https://media.istockphoto.com/id/531027327/photo/cheetah-on-the-hunt.jpg?s=612x612&w=0&k=20&c=9UdDsfYXVW0Qs176g27FC_rK40V4NXhfcYSbdxppec8=',
      title: 'Speedy Cheetah',
      description:
        'Cheetahs are the fastest land animals, reaching speeds of up to 75 mph.',
        isDisabled: false
    },
    {
      id: 4,
      image: 'https://st.depositphotos.com/1725497/5155/i/450/depositphotos_51551545-stock-photo-green-parrot-macaw-with-bokeh.jpg',
      title: 'Colorful Parrot',
      description:
        'Parrots are highly intelligent birds, known for their ability to mimic human speech.',
        isDisabled: false
    },
    {
      id: 5,
      image: 'https://www.worldanimalprotection.ca/cdn-cgi/image/width=1280,format=auto/siteassets/shutterstock_2497636061.jpg',
      title: 'Stealthy Tiger',
      description:
        'Tigers are powerful hunters, with striped coats that help them blend into forests.',
        isDisabled: false
    },
    {
      id: 6,
      image: 'https://cdn.britannica.com/16/75616-050-14C369D3/dolphins-mammals-fish-water.jpg',
      title: 'Playful Dolphin',
      description:
        'Dolphins are social and intelligent marine mammals, known for their playful behavior.',
        isDisabled: false
    },
  ];

  disableButton(animal: any) {
    animal.isDisabled = true;
    setTimeout(() => {
      animal.isDisabled = false; 
    }, 10000);
  }

}
