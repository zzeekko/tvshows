/**
 * 
 * array of 12 tv shows
 * {
 * id:
 * title:
 * genre: []
 * yearStart:
 * yearEnd:
 * seasonCount:
 * episodeCount:
 * network => disney, nickelodeon, pbs, cartoon network
 * creator:
 * isFavorite: boolean
 * }
 * 
 * build cards
 * 
 * load cards
 * 
 * filter
 */

class Shows {

    constructor() {
        this.data = [
            {
                id: 'cn001',
                title: 'Adventure Time',
                genre: ['comedy', 'adventure', 'fantasy', 'action', 'drama'],
                yearStart: new Date('April 5, 2010'),
                yearEnd: new Date('September 3, 2018'),
                seasonCount: 10,
                episodeCount: 283,
                network: 'cartoon network',
                creator: 'pendleton ward',
                isFavorite: false
            },
            {
                id: 'pbs001',
                title: 'wild kratts',
                genre: ['adventure', 'comedy', 'family'],
                yearStart: new Date('January 3, 2011'),
                yearEnd: new Date(),
                seasonCount: 7,
                episodeCount: 170,
                network: 'pbv',
                creator: 'kratt brothers',
                isFavorite: false
            },
            {
                id: 'pbs002',
                title: 'arthur',
                genre: ['family', 'comedy', 'fantasy'],
                yearStart: new Date('October 7, 1996'),
                yearEnd: new Date('February 21, 2022'),
                seasonCount: 25,
                episodeCount: 253,
                network: 'pbs',
                creator: 'marc brown',
                isFavorite: false
            },
            {
                id: 'nk001',
                title: 'spongebob squarepants',
                genre: ['comedy', 'adventure'],
                yearStart: new Date('May 1, 1999'),
                yearEnd: new Date(),
                seasonCount: 15,
                episodeCount: 311,
                network: 'nickelodeon',
                creator: 'stephen hillenburg',
                isFavorite: false
            },
            {
                id: 'cn002',
                title: 'regular show',
                genre: ['comedy', 'sci-fi', 'adventure'],
                yearStart: new Date(September 6, 2010),
                yearEnd: new Date(January 16, 2017),
                seasonCount: 8,
                episodeCount: 244,
                network: 'cartoon network',
                creator: 'j. g. quintel',
                isFavorite: false
            },
            {
                id: 'dn001',
                title: 'duck tales',
                genre: ['adventure', 'comedy', 'fantasy'],
                yearStart: new Date('September 18, 1987'),
                yearEnd: new Date('November 28, 1990'),
                seasonCount: 4,
                episodeCount: 100,
                network: 'disney',
                creator: 'carl barks',
                isFavorite: false
            },
            {
                id: 'dn002',
                title: 'gravity falls',
                genre: ['comedy', 'fantasy'],
                yearStart: new Date('June 15, 2012'),
                yearEnd: new Date('February 15, 2016'),
                seasonCount: 2,
                episodeCount: 40,
                network: 'disney',
                creator: 'alex hirsch',
                isFavorite: false
            },
            {
                id: 'cn003',
                title: 'johnny bravo',
                genre: ['comedy'],
                yearStart: new Date('July 14, 1997'),
                yearEnd: new Date('August 27, 2004'),
                seasonCount: 4,
                episodeCount: 65,
                network: 'cartoon network',
                creator: 'van partible',
                isFavorite: false
            },
            {
                id: 'cn004',
                title: 'codename: kids next door',
                genre: ['comedy', 'sci-fi'],
                yearStart: new Date('December 6, 2002'),
                yearEnd: new Date('January 21, 2008'),
                seasonCount: 6,
                episodeCount: 81,
                network: 'cartoon network',
                creator: 'mr. warburton',
                isFavorite: false
            },
            {
                id: 'nk002',
                title: 'rugrats',
                genre: ['comedy', 'adventure'],
                yearStart: new Date('August 11, 1991'),
                yearEnd: new Date('August 1, 2004'),
                seasonCount: 9,
                episodeCount: 172,
                network: 'nickelodeon',
                creator: 'arlene klasky',
                isFavorite: false
            },
            {
                id: 'dn003',
                title: 'kim possible',
                genre: ['action', 'adventure'],
                yearStart: new Date('June 7, 2002'),
                yearEnd: new Date('September 7, 2007'),
                seasonCount: 4,
                episodeCount: 87,
                network: 'disney',
                creator: 'bob schooley',
                isFavorite: false
            },
            {
                id: 'nk003',
                title: 'backyardigans',
                genre: ['music', 'fantasy', 'adventure'],
                yearStart: new Date('October 11, 2004'),
                yearEnd: new Date('July 12, 2013'),
                seasonCount: 4,
                episodeCount: 80,
                network: 'nickelodeon',
                creator: 'janice burgess',
                isFavorite: false
            }
        ]
    }
}