var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "ch-invarianttheory",
  "level": "1",
  "url": "ch-invarianttheory.html",
  "type": "Chapter",
  "number": "1",
  "title": "Invariant Theory",
  "body": " Invariant Theory   This chapter is co-authored by Francesca Gandini, Sumner Strom, Al Ashir Intisar. In this chapter we will present an overview of the theory behind the algorithms implemented in the InvariantRing software package in the open-source Computer Algebra System Macaulay2 (M2) .  You can access an online version of this chapter with live code cell at . There you can also learn how to set up a virtual machine on Github with Codespaces so that you write and run M2 code from anywhere. A turn-key repository for creating a Codespace for Macaulay2 is available at fragandi\/M2-codespace .  We also include some background on orbit sums necessary to implement an algorithm to compute invariants for permutations actions. We have worked with a group of collaborators on the first version of the code for this algorithm at the Macaulay2 Workshop at Tulane University in April 2025 and plan to further test it and release it with Macaulay2 in Fall 2025.  We finish the chapter with a selection of examples that illustrate the current capabilities of the InvariantRing package. You can run the provided code in your local installation of M2 or go to the online version and execute the code cells on your browser. Works well even on mobile devices!    A concrete introduction to invariant rings    Finite Matrix Groups  We can think of a (linear) action of a group on a vector space concretely by interpreting each group element as a matrix and describing the action as matrix multiplication on vectors. We can then evaluate any polynomial on a vector and its image after the action.   Consider and the vector This gives . Thus for the polynomial and we have, .   More formally, for a finite group we will consider a linear representation of via its action on a finite dimensional vector space over a field of characteristics zero. In general, most of the results in this chapter hold in the non-modular case i.e., when the characteristics of the field does not divide the order of the group. However finite fields are not fully supported by the current version of the InvariantRing package and the development of such functionalities is an active area of development.  If is faithful representation of of dimension , the image of the representation is isomorphic to and so we consider as a finite matrix group .  Suppose and , then is a finite matrix group.   Let us consider a two-dimesional representation of , the cyclic group of order 2.      Invariant Rings  We will work with a polynomial ring in variables over the field . We use the notation and abuse it by saying and for .   Let be a finite matrix group within . We say that is invariant under the action of if and only if for all .   The polynomials and in are invariant under the action of However the polynoial is not.   We can consider the set of all invariant polynomials under some action of a group . A good exercise is to prove that this set has the structure of a ring.  Let . We define to be the invariant ring for the action of on .    Reynolds Operator  We have that the invariant ring is a subring of the ring . However, it is not an ordinary subring. In characteristic zero, we have a projection from to that respects the action of . The idea: \"averaging\" over the action of we get an invariant polynomial.   The averaging (or Reynolds) map is given by     Example for the Group action . Consider the polynomial , which is not invariant under the action of . We have that: and we can check that is indeed invariant.      Degree bounds and algorithms  Our goal is to find algorithms that provide us with a description of all possible invariants in an efficient way. Formally, we look for minimal generators for the ring of invariants and more precisely for minimal algebra generators for as an algebra over the coefficient field .  For our search to be successful, we need to hope that there are finitely many generators. In our setup (finite groups and characteristic zero) a consequence of Hilbert's Basis Theorem is that our invariant rings are finitely generated. However, we will run in computational troubles if we do not have a stopping point for our search. The most effective way is to provide a bound the degrees of these generators.   Nöether Degree Bound(NDB)  A beautiful theorem of Noether establishes that we have a bound on the degree of a minimal generator independent from the action itself, but just in terms of the order of the group. Moreover, we only need to look at images of monomials under the Reynolds operator.  (Noether):    (Noether Degree Bound) The ring of invariants is generated in degrees .   Noether's result a constructive one and provides us with a first rudimentary computational tool! We can apply to all the finitely many monomials in degrees to get generators for . As the number of monomials grows significantly with the number of variables and the degree, this is more of a theoretical algorithm, but it does tell us that our goal is at least possible!    Hilbert Ideal  To describe a more sophisticated approach to the search for minimal algebra generators for sn invariant ring, we will actually need to consider an ideal. Note: In general for , the ideal generatd by and the subalgebra generated by over can be quite different objects.   Let be the ideal in generated by all positive degree invariants. We call the Hilbert Ideal for this action of .   Let be the Hilbert ideal in for the action of . If and every is invariant so , then   Note that the condition that every generator is invariant is not hard to satisfy as if you have a generator that is not invariant, then you can apply the Reynolds operator to obtain a new generator that is. You can now replace the old generator with this new one and still get the same ideal. What is special here is that a set of ideal generators work as algebra generators! Computationally, algebra generators are much harder to find as there is no guarantee to have finitely many of them. However, Hilbert Basis Theorem tells us that every ideal is finitely generated.    Presentations   Definition: Let . A presentation of is a map, such that With the syzygies of 's giving the presentation ideal.    (Elimination Theory): In consider the ideal, Then,     Compute a Groebner Basis for with elimination order for the 's. Then, is the Groebner Basis for      Graph of Linear Actions    Let . For consider, Then is the subspace arrangement associated to the action of G.   Note: is a linear subspace, set of polynomials vanishing on is a linear ideal. Example:     Subspace Arrangement Approach   (Dekseu): Let Then This uses elimination theory and the Hilbert ideal.    Note: The same approach works in the exterior algebra!   Let . Then    Note: This approach is slow for polynomials, but might be fast for skew polynomials.    Abelian GPS and Weight Matrices  Let for  A diagonal action of on is given by for primitive root of unity and , . And encoded in the weight matrix     for zeros being the weight of acting on and being modulo .   Note: We can examine all monomials and sort them by their weight . The ones with weight will be invariant!    Orbit Sums  Say the symmetric group acts on by permuting its elements. Then the representation of is with a set of basis vectors . This means that acts on by permuting its basis vectors, we have a permutation representation.  Example of left acting matrix on the basis: and then we have it acting,   These are useful tools for calculating invariants because we simplify to Linear Algebra! An example of invariants are symmetric polynomials which we can use permutation representations on.    Symmetric Polynomial: For a polynomial is a Symmetric Polynomial if for all permutations of       Elementary Symmetric Polynomials: in are defined by     We now introduce some tools for calculating properties of these permutation groups. Such as Orbit sums and Special Monomials.    Orbit Sums are the sum of all orbit elements. An orbit is A for the left acting group on an element is       The orbit sums of any given degree form a basis for the vector space       A monomial is special within if the partitions satisfy .    Statement: would not be special within .  Algorithmically, we can reduce any monomial to special by reducing the upper degrees repeatedly until the monomial is special. Example: within    This all leads to a theorem.    (Göbel): Let be a permutation representation of a finite group for . Then the ring of invariants is generated as an algebra by the top elementary symmetric function and the orbit sum of monomials.    This theorem is a possibly important tool for reducing computational need to generate these algebra.     InvariantRings package  We conclude with references to the algorithms implemented in the InvariantRing package and examples of its implementation. Version 2.0 of this package was accepted for publication in volume 14 of Journal of Software for Algebra and Geometry on 2023-09-14, in the article The InvariantRing package for Macaulay2 (DOI: 10.2140\/jsag.2024.14.5). That version can be obtained from the journal or from the Macaulay2 source code repository.   References for the implemented algorithms    An elimination theory algorithm that computes the Hilbert ideal for any linearly reductive group: Derksen, H. and Kemper, G. (2015). Computational Invariant Theory. Heidelberg: Springer. Algorithm 4.1.9, pp 159-164    A simple and efficient algorithm for invariants of tori based on: Derksen, H. and Kemper, G. (2015). Computational Invariant Theory. Heidelberg: Springer. Algorithm 4.3.1 pp 174-177    An adaptation of the tori algorithm for invariants of finite abelian groups based on: Gandini, F. Ideals of Subspace Arrangements. Thesis (Ph.D.)-University of Michigan. 2019. ISBN: 978-1392-76291-2. pp 29-34.    King's algorithm and the linear algebra method for invariants of finite groups: Derksen, H. and Kemper, G. (2015). Computational Invariant Theory. Heidelberg: Springer. Algorithm 3.8.2, pp 107-109; pp 72-74    The algorithms for primary and secondary invariants, and Molien series of finite groups implemented in version 1.1.0 of this package by: Hawes, T. Computing the invariant ring of a finite group. JSAG, Vol. 5 (2013). pp 15-19. DOI: 10.2140\/jsag.2013.5.15    The orbit sum approach is under development following Mara D. Neusel, Texas Tech University, Lubbock, TX. Publication: The Student Mathematical Library. Publication Year 2007: Volume 36, DOI:       InvariantRing Library Demos  The InvariantRing package in Macaulay2 provides tools to study and compute invariant rings of group actions. To get started, install the package.    SL₂ Actions on C² and Variants  A classical example: the standard action of SL₂ on ℂ². The ring R carries a linearly reductive action from SL₂ defined via the matrix SL2std . The invariants and Hilbert ideal are then computed:     Diagonal Actions of Abelian Groups  This example demonstrates a diagonal action of the abelian group ℂ₃ × ℂ₃ on a polynomial ring. After defining the diagonal weights, we compute the invariant ring and its Hilbert series:     Linearly Reductive Actions: Permutations and Binary Forms  Here's how the symmetric group S₂ acts via a matrix of projection operators. We identify which polynomials are invariant under the group action:   Now we compute the invariants of binary quadratics and quartics using SL₂ actions. These involve basis substitutions in a ring of forms and are more computationally demanding:      Matrix Invariants and Conjugation Actions  We define SL₂ actions on 2×2 and 3×3 matrices of binary or ternary forms. The conjugation action creates sophisticated invariants under change of basis:   The same process is repeated for 3×3 matrices. This involves 9-dimensional vector spaces and is more computationally demanding:     Finite Group Actions: S₄ Example  Finally, we examine the symmetric group S₄ acting on 4 variables. We use both King’s algorithm and a slower linear algebra method to compute primary and secondary invariants:      "
},
{
  "id": "subsec-finite-matrix-groups-3",
  "level": "2",
  "url": "ch-invarianttheory.html#subsec-finite-matrix-groups-3",
  "type": "Example",
  "number": "1.1.1",
  "title": "",
  "body": " Consider and the vector This gives . Thus for the polynomial and we have, .  "
},
{
  "id": "subsec-finite-matrix-groups-5",
  "level": "2",
  "url": "ch-invarianttheory.html#subsec-finite-matrix-groups-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "matrix group "
},
{
  "id": "subsec-finite-matrix-groups-6",
  "level": "2",
  "url": "ch-invarianttheory.html#subsec-finite-matrix-groups-6",
  "type": "Definition",
  "number": "1.1.2",
  "title": "",
  "body": "Suppose and , then is a finite matrix group. "
},
{
  "id": "subsec-finite-matrix-groups-7",
  "level": "2",
  "url": "ch-invarianttheory.html#subsec-finite-matrix-groups-7",
  "type": "Example",
  "number": "1.1.3",
  "title": "",
  "body": " Let us consider a two-dimesional representation of , the cyclic group of order 2.   "
},
{
  "id": "subsec-invariant-rings-3",
  "level": "2",
  "url": "ch-invarianttheory.html#subsec-invariant-rings-3",
  "type": "Definition",
  "number": "1.1.4",
  "title": "",
  "body": " Let be a finite matrix group within . We say that is invariant under the action of if and only if for all . "
},
{
  "id": "subsec-invariant-rings-4",
  "level": "2",
  "url": "ch-invarianttheory.html#subsec-invariant-rings-4",
  "type": "Example",
  "number": "1.1.5",
  "title": "",
  "body": " The polynomials and in are invariant under the action of However the polynoial is not.  "
},
{
  "id": "subsec-invariant-rings-6",
  "level": "2",
  "url": "ch-invarianttheory.html#subsec-invariant-rings-6",
  "type": "Definition",
  "number": "1.1.6",
  "title": "",
  "body": "Let . We define to be the invariant ring for the action of on . "
},
{
  "id": "subsec-reynolds-operator-2",
  "level": "2",
  "url": "ch-invarianttheory.html#subsec-reynolds-operator-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "projection "
},
{
  "id": "subsec-reynolds-operator-3",
  "level": "2",
  "url": "ch-invarianttheory.html#subsec-reynolds-operator-3",
  "type": "Definition",
  "number": "1.1.7",
  "title": "",
  "body": " The averaging (or Reynolds) map is given by   "
},
{
  "id": "subsec-reynolds-operator-4",
  "level": "2",
  "url": "ch-invarianttheory.html#subsec-reynolds-operator-4",
  "type": "Example",
  "number": "1.1.8",
  "title": "",
  "body": " Example for the Group action . Consider the polynomial , which is not invariant under the action of . We have that: and we can check that is indeed invariant.  "
},
{
  "id": "sec-degree-bounds-algorithms-2",
  "level": "2",
  "url": "ch-invarianttheory.html#sec-degree-bounds-algorithms-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "minimal generators "
},
{
  "id": "subsec-noether-degree-bound-3",
  "level": "2",
  "url": "ch-invarianttheory.html#subsec-noether-degree-bound-3",
  "type": "Theorem",
  "number": "1.2.1",
  "title": "",
  "body": "(Noether):  "
},
{
  "id": "subsec-noether-degree-bound-4",
  "level": "2",
  "url": "ch-invarianttheory.html#subsec-noether-degree-bound-4",
  "type": "Corollary",
  "number": "1.2.2",
  "title": "",
  "body": " (Noether Degree Bound) The ring of invariants is generated in degrees .  "
},
{
  "id": "def-",
  "level": "2",
  "url": "ch-invarianttheory.html#def-",
  "type": "Definition",
  "number": "1.2.3",
  "title": "",
  "body": " Let be the ideal in generated by all positive degree invariants. We call the Hilbert Ideal for this action of .  "
},
{
  "id": "subsec-hilbert-ideal-4",
  "level": "2",
  "url": "ch-invarianttheory.html#subsec-hilbert-ideal-4",
  "type": "Theorem",
  "number": "1.2.4",
  "title": "",
  "body": "Let be the Hilbert ideal in for the action of . If and every is invariant so , then  "
},
{
  "id": "subsec-presentations-2-1",
  "level": "2",
  "url": "ch-invarianttheory.html#subsec-presentations-2-1",
  "type": "Definition",
  "number": "1.2.5",
  "title": "",
  "body": "Definition: Let . A presentation of is a map, such that With the syzygies of 's giving the presentation ideal. "
},
{
  "id": "subsec-presentations-3-1",
  "level": "2",
  "url": "ch-invarianttheory.html#subsec-presentations-3-1",
  "type": "Proposition",
  "number": "1.2.6",
  "title": "",
  "body": "(Elimination Theory): In consider the ideal, Then,  "
},
{
  "id": "subsec-presentations-4-1",
  "level": "2",
  "url": "ch-invarianttheory.html#subsec-presentations-4-1",
  "type": "Algorithm",
  "number": "1.2.7",
  "title": "",
  "body": "Compute a Groebner Basis for with elimination order for the 's. Then, is the Groebner Basis for  "
},
{
  "id": "subsec-graph-of-linear-actions-2-1",
  "level": "2",
  "url": "ch-invarianttheory.html#subsec-graph-of-linear-actions-2-1",
  "type": "Definition",
  "number": "1.2.8",
  "title": "",
  "body": " Let . For consider, Then is the subspace arrangement associated to the action of G. "
},
{
  "id": "subsec-subspace-arrangement-approach-2-1",
  "level": "2",
  "url": "ch-invarianttheory.html#subsec-subspace-arrangement-approach-2-1",
  "type": "Theorem",
  "number": "1.2.9",
  "title": "",
  "body": "(Dekseu): Let Then This uses elimination theory and the Hilbert ideal.  "
},
{
  "id": "subsec-subspace-arrangement-approach-4-1",
  "level": "2",
  "url": "ch-invarianttheory.html#subsec-subspace-arrangement-approach-4-1",
  "type": "Theorem",
  "number": "1.2.10",
  "title": "",
  "body": "Let . Then  "
},
{
  "id": "subsec-AGWM-3-1",
  "level": "2",
  "url": "ch-invarianttheory.html#subsec-AGWM-3-1",
  "type": "Theorem",
  "number": "1.2.11",
  "title": "",
  "body": " for zeros being the weight of acting on and being modulo . "
},
{
  "id": "def-symmetricpolynomial",
  "level": "2",
  "url": "ch-invarianttheory.html#def-symmetricpolynomial",
  "type": "Definition",
  "number": "1.2.12",
  "title": "",
  "body": "  Symmetric Polynomial: For a polynomial is a Symmetric Polynomial if for all permutations of    "
},
{
  "id": "def-elemsymm",
  "level": "2",
  "url": "ch-invarianttheory.html#def-elemsymm",
  "type": "Definition",
  "number": "1.2.13",
  "title": "",
  "body": "  Elementary Symmetric Polynomials: in are defined by    "
},
{
  "id": "def-orbitsum",
  "level": "2",
  "url": "ch-invarianttheory.html#def-orbitsum",
  "type": "Definition",
  "number": "1.2.14",
  "title": "",
  "body": "  Orbit Sums are the sum of all orbit elements. An orbit is A for the left acting group on an element is    "
},
{
  "id": "prop-orbitsumsformvectorspace",
  "level": "2",
  "url": "ch-invarianttheory.html#prop-orbitsumsformvectorspace",
  "type": "Proposition",
  "number": "1.2.15",
  "title": "",
  "body": "  The orbit sums of any given degree form a basis for the vector space    "
},
{
  "id": "def-specialmonomials",
  "level": "2",
  "url": "ch-invarianttheory.html#def-specialmonomials",
  "type": "Definition",
  "number": "1.2.16",
  "title": "",
  "body": "  A monomial is special within if the partitions satisfy .   "
},
{
  "id": "thm-gobel",
  "level": "2",
  "url": "ch-invarianttheory.html#thm-gobel",
  "type": "Theorem",
  "number": "1.2.17",
  "title": "",
  "body": "  (Göbel): Let be a permutation representation of a finite group for . Then the ring of invariants is generated as an algebra by the top elementary symmetric function and the orbit sum of monomials.   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
